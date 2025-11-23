import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../citas/services/cita.service';
import { MascotaService } from '../../mascotas/mascota.service';
import { Mascota } from '../../shared/models';

@Component({
  selector: 'app-historial-view',
  standalone: false,
  templateUrl: './historial-view.component.html',
  styleUrls: ['./historial-view.component.css'],
})
export class HistorialView implements OnInit {
  pastCitas: Array<any> = [];

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.loadPast();
  }

  loadPast(): void {
    const all = this.citaService.getAll();
    const ahora = Date.now();

    this.pastCitas = (all || [])
      .filter(c => new Date(c.fechaHora).getTime() < ahora) // Solo pasadas
      .map(c => {
        // Buscamos la mascota completa
        const m: Mascota | undefined = this.mascotaService.getById(c.mascotaId);
        return {
          ...c,
          // Aquí agregamos la info extra que pediste:
          mascotaNombre: m ? m.nombre : 'Desconocida',
          mascotaRaza: m ? m.raza : 'No especificada',
          duenoNombre: m ? m.duenoNombre : 'No registrado',
          duenoTel: m ? m.duenoTelefono : ''
        };
      })
      .sort((a, b) => new Date(b.fechaHora).getTime() - new Date(a.fechaHora).getTime());
  }

  eliminar(id: string) {
    if (confirm('¿Borrar este registro del historial?')) {
      this.citaService.delete(id);
      this.loadPast();
    }
  }
}
