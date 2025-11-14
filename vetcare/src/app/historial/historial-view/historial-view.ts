import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../citas/services/cita.service';
import { MascotaService } from '../../mascotas/mascota.service';
import { Mascota } from '../../shared/models';

@Component({
  selector: 'app-historial-view',
  standalone: false,
  templateUrl: './historial-view.html',
  styleUrls: ['./historial-view.css'],
})
export class HistorialView implements OnInit {
  pastCitas: Array<any> = [];

  constructor(private citaService: CitaService, private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.loadPast();
  }

  private loadPast(): void {
    const all = this.citaService.getAll();
    const ahora = Date.now();
    this.pastCitas = (all || [])
      .filter(c => new Date(c.fechaHora).getTime() < ahora)
      .map(c => {
        const m: Mascota | null = this.mascotaService.getById ? this.mascotaService.getById(c.mascotaId) : null;
        return {
          ...c,
          mascotaNombre: m ? m.nombre : 'Desconocida'
        };
      })
      .sort((a, b) => new Date(b.fechaHora).getTime() - new Date(a.fechaHora).getTime());
  }

  eliminar(id: string) {
    if (!confirm('Eliminar cita?')) return;
    this.citaService.delete(id);
    this.loadPast();
  }
}
