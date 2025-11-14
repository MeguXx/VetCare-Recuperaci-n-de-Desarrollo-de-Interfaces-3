export interface Mascota {
  id: string;
  nombre: string;
  especie?: string;
  raza?: string;
  edad?: string;
  dueno?: {
    nombre?: string;
    telefono?: string;
  };
  createdAt?: string;
}

export interface Cita {
  id: string;
  mascotaId: string;
  fechaHora: string; // ISO string
  motivo?: string;
  estado?: 'programada' | 'completada' | 'cancelada';
  createdAt?: string;
}
