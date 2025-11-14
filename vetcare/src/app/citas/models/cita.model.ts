export interface Cita {
  id: string;
  mascotaId: string;
  fechaHora: string; // ISO string
  motivo?: string;
  estado?: 'programada' | 'completada' | 'cancelada';
  createdAt?: string;
}
