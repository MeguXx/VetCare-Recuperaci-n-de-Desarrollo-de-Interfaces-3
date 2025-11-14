import { Injectable } from '@angular/core';
import { Cita } from '../../shared/models';

const STORAGE_KEY = 'vetcare_citas_v1';

function simpleId() {
  // id corto, suficiente para localStorage en esta app de entrega
  return Math.random().toString(36).substring(2, 9);
}

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citas: Cita[] = [];

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.citas));
  }

  private load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    this.citas = raw ? JSON.parse(raw) : [];
  }

  getAll(): Cita[] {
    return [...this.citas].sort((a, b) => new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime());
  }

  getById(id: string): Cita | undefined {
    return this.citas.find(c => c.id === id);
  }

  getByMascota(mascotaId: string): Cita[] {
    return this.getAll().filter(c => c.mascotaId === mascotaId);
  }

  create(cita: Omit<Cita, 'id' | 'createdAt'>): Cita {
    const newCita: Cita = {
      ...cita,
      id: simpleId(),
      createdAt: new Date().toISOString(),
      estado: cita.estado ?? 'programada'
    };
    this.citas.push(newCita);
    this.save();
    return newCita;
  }

  update(id: string, patch: Partial<Cita>) {
    const idx = this.citas.findIndex(c => c.id === id);
    if (idx === -1) return null;
    this.citas[idx] = { ...this.citas[idx], ...patch };
    this.save();
    return this.citas[idx];
  }

  delete(id: string) {
    this.citas = this.citas.filter(c => c.id !== id);
    this.save();
  }

  // Utilidad simple: franjas fijas y evitar ya tomadas
  getAvailableSlotsOn(dateIso: string): string[] {
    const day = (new Date(dateIso)).toISOString().slice(0,10);
    const slots = ['09:00','10:00','11:00','14:00','15:00','16:00'];
    const taken = this.citas
      .filter(c => c.fechaHora.startsWith(day))
      .map(c => new Date(c.fechaHora).toISOString().slice(11,16));
    return slots.filter(s => !taken.includes(s));
  }
}
