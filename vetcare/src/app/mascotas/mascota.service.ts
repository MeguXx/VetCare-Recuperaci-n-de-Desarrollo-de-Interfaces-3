import { Injectable } from '@angular/core';
import { Mascota } from '../shared/models';

const STORAGE_KEY = 'vetcare_mascotas_v1';

function simpleId() {
  return Math.random().toString(36).substring(2, 9);
}

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private mascotas: Mascota[] = [];

  constructor() {
    this.load();
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.mascotas));
  }

  private load(): void {
    const raw = localStorage.getItem(STORAGE_KEY);
    this.mascotas = raw ? JSON.parse(raw) : [];
  }

  // Método que registra una mascota y la persiste en localStorage
  registrarMascota(mascota: any): Mascota {
    const newMascota: Mascota = {
      id: mascota.id || simpleId(),
      nombre: mascota.nombre || 'Sin nombre',
      especie: mascota.especie,
      raza: mascota.raza,
      edad: mascota.edad,
      dueno: mascota.dueno || {},
      createdAt: new Date().toISOString()
    };

    this.mascotas.push(newMascota);
    this.save();

    console.log('Mascota registrada:', newMascota);

    return newMascota;
  }

  // Métodos útiles para el resto de la app (citas, historial)
  getAll(): Mascota[] {
    return [...this.mascotas];
  }

  getById(id: string): Mascota | null {
    return this.mascotas.find(m => m.id === id) || null;
  }

  update(id: string, patch: Partial<Mascota>): Mascota | null {
    const idx = this.mascotas.findIndex(m => m.id === id);
    if (idx === -1) return null;
    this.mascotas[idx] = { ...this.mascotas[idx], ...patch };
    this.save();
    return this.mascotas[idx];
  }

  delete(id: string): void {
    this.mascotas = this.mascotas.filter(m => m.id !== id);
    this.save();
  }

  // Utilidad: buscar por nombre (opcional para UI)
  searchByName(query: string): Mascota[] {
    const q = (query || '').toLowerCase();
    return this.mascotas.filter(m => (m.nombre || '').toLowerCase().includes(q));
  }
}
