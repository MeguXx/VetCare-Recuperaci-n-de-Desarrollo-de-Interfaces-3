import { Injectable } from '@angular/core';
import { CitaService } from '../citas/services/cita.service';

@Injectable({ providedIn: 'root' })
export class HistorialService {
  constructor(private citaService: CitaService) {}

  // devuelve todas las citas pasadas
  getPastAll() {
    const ahora = Date.now();
    return (this.citaService.getAll() || []).filter(c => new Date(c.fechaHora).getTime() < ahora);
  }

  // devuelve citas pasadas por mascota
  getPastByMascota(mascotaId: string) {
    return this.getPastAll().filter(c => c.mascotaId === mascotaId);
  }
}
