import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'estadoCita', standalone: false })
export class EstadoCitaPipe implements PipeTransform {
  transform(fechaHoraIso?: string | null): string {
    if (!fechaHoraIso) return '';
    const fecha = new Date(fechaHoraIso).getTime();
    const ahora = Date.now();
    return fecha > ahora ? 'Próxima' : 'Pasada';
  }
}
