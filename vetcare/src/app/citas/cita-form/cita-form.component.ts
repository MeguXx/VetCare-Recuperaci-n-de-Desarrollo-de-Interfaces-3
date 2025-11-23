import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importante para redirigir
import { CitaService } from '../services/cita.service';
import { MascotaService } from '../../mascotas/mascota.service';
import { Mascota } from '../../shared/models';

@Component({
  selector: 'app-cita-form',
  standalone: false, // Mantenemos false porque usas Módulos
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.css']
})
export class CitaFormComponent implements OnInit {
  form: FormGroup;
  mascotas: Mascota[] = [];
  availableSlots: string[] = [];

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService,
    private mascotaService: MascotaService,
    private router: Router
  ) {
    this.form = this.fb.group({
      mascotaId: ['', Validators.required],
      fecha: ['', Validators.required], // YYYY-MM-DD
      hora: ['', Validators.required],  // HH:MM
      motivo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // 1. Cargar mascotas para el Select
    this.mascotas = this.mascotaService.getAll();

    // 2. Escuchar cambios en la fecha para actualizar horas disponibles
    this.form.get('fecha')?.valueChanges.subscribe(fecha => {
      if (fecha) {
        this.availableSlots = this.citaService.getAvailableSlotsOn(fecha);
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { mascotaId, fecha, hora, motivo } = this.form.value;

    // Crear fecha ISO combinando dia y hora
    // Nota: Agregamos 'T' para formato ISO estándar
    const fechaHora = `${fecha}T${hora}:00`;

    this.citaService.create({
      mascotaId,
      fechaHora, // Guardamos formato completo
      motivo,
      estado: 'programada'
    });

    alert('¡Cita agendada con éxito!');
    this.router.navigate(['/citas']); // <--- ESTO TE LLEVA A LA AGENDA
  }
}
