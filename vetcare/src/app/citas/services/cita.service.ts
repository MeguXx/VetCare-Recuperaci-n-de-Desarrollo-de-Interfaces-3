import { Injectable } from '@angular/core';
import { Cita } from '../../shared/models';

const STORAGE_KEY = 'vetcare_citas_v1';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citas: Cita[] = [];

  constructor() {
    this.load();
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.citas));
  }

  private load(): void {
    const raw = localStorage.getItem(STORAGE_KEY);
    this.citas = raw ? JSON.parse(raw) : [];
  }

  getAll(): Cita[] {
    if (this.citas.length === 0) this.load();
    // Retornamos ordenadas por fecha (las más recientes primero)
    return [...this.citas].sort((a, b) => new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime());
  }

  create(cita: Omit<Cita, 'id' | 'createdAt'>): Cita {
    const newCita: Cita = {
      ...cita,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      estado: 'programada'
    };
    this.citas.push(newCita);
    this.save(); // <--- ESTO ES LO QUE FALTABA PARA QUE SE GUARDE
    return newCita;
  }

  delete(id: string): void {
    this.citas = this.citas.filter(c => c.id !== id);
    this.save();
  }

  // Utilidad para ver franjas ocupadas
  getAvailableSlotsOn(dateIso: string): string[] {
    const day = dateIso.split('T')[0]; // YYYY-MM-DD
    const slots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

    const taken = this.citas
      .filter(c => c.fechaHora.startsWith(day))
      .map(c => {
        const date = new Date(c.fechaHora);
        // Obtenemos HH:MM
        return date.toTimeString().substring(0, 5);
      });

    return slots.filter(s => !taken.includes(s));
  }
}
