export interface Mascota {
  id: string;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  duenoNombre: string;
  duenoTelefono: string;
  createdAt?: string;
}

export interface Cita {
  id: string;
  mascotaId: string;
  fechaHora: string;
  motivo?: string;
  estado: 'programada' | 'completada' | 'cancelada';
  createdAt?: string;
}
