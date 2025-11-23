import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { MascotaService } from '../../mascotas/mascota.service';

@Component({
  selector: 'app-cita-list',
  standalone: false,
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.css']
})
export class CitaListComponent implements OnInit {
  citas: Array<any> = [];

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const all = this.citaService.getAll();
    // Filtramos citas futuras (o de hoy en adelante)
    const hoy = new Date();
    hoy.setHours(0,0,0,0);

    this.citas = (all || [])
      .filter(c => new Date(c.fechaHora) >= hoy)
      .map(c => {
        const mascota = this.mascotaService.getById(c.mascotaId);
        return {
          ...c,
          mascotaNombre: mascota ? mascota.nombre : 'Desconocida',
          mascotaRaza: mascota ? mascota.raza : '',
          duenoNombre: mascota ? mascota.duenoNombre : ''
        };
      })
      .sort((a, b) => new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime());
  }

  eliminar(id: string): void {
    if (confirm('¿Cancelar esta cita?')) {
      this.citaService.delete(id);
      this.load();
    }
  }
}
