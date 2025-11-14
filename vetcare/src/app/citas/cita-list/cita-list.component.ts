import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { MascotaService } from '../../mascotas/mascota.service';
import { Cita, Mascota } from '../../shared/models';

@Component({
  selector: 'app-cita-list',
  standalone: false,
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.css']
})
export class CitaListComponent implements OnInit {
  citas: Cita[] = [];
  // grouped by day for a simple agenda view
  grouped: Array<{ day: string; citas: Array<Cita & { mascotaNombre?: string }> }> = [];

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const all = this.citaService.getAll();
    this.citas = (all || []);

    // build grouped agenda (by yyyy-mm-dd)
    const groups: Record<string, Array<Cita & { mascotaNombre?: string }>> = {};
    (this.citas || []).forEach(c => {
      const day = (new Date(c.fechaHora)).toISOString().slice(0,10);
      const mascota = (this.mascotaService as any).getById ? (this.mascotaService as any).getById(c.mascotaId) : null;
      const item = { ...c, mascotaNombre: mascota ? mascota.nombre : 'Desconocida' };
      groups[day] = groups[day] || [];
      groups[day].push(item);
    });

    this.grouped = Object.keys(groups).sort().map(day => ({ day, citas: groups[day].sort((a,b) => new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime()) }));
  }

  eliminar(id: string): void {
    if (!confirm('Eliminar cita?')) return;
    this.citaService.delete(id);
    this.load();
  }
}
