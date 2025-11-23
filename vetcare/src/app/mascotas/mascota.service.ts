import { Injectable } from '@angular/core';
import { Mascota } from '../shared/models';

const STORAGE_KEY = 'vetcare_mascotas_v1';

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

  registrarMascota(datos: Omit<Mascota, 'id' | 'createdAt'>): Mascota {
    const newMascota: Mascota = {
      id: Math.random().toString(36).substring(2, 9),
      nombre: datos.nombre || 'Sin nombre',
      especie: datos.especie,
      raza: datos.raza,
      edad: datos.edad, // <--- CAMBIO: Guardamos la edad
      duenoNombre: datos.duenoNombre,
      duenoTelefono: datos.duenoTelefono,
      createdAt: new Date().toISOString()
    };

    this.mascotas.push(newMascota);
    this.save();
    return newMascota;
  }

  getAll(): Mascota[] {
    if (this.mascotas.length === 0) { this.load(); }
    return [...this.mascotas];
  }

  getById(id: string): Mascota | undefined {
    return this.mascotas.find(m => m.id === id);
  }

  delete(id: string): void {

    this.mascotas = this.mascotas.filter(m => m.id !== id);

    this.save();
  }
}
