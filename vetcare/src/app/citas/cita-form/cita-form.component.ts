import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../services/cita.service';
import { MascotaService } from '../../mascotas/mascota.service';
import { Mascota } from '../../shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cita-form',
  standalone: false,
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.css']
})
export class CitaFormComponent implements OnInit {
  form: FormGroup;
  mascotas: Mascota[] = [];
  availableSlots: string[] = [];
  private fechaSub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {

    this.form = this.fb.group({
      mascotaId: ['', Validators.required],
      fecha: ['', Validators.required], // yyyy-mm-dd
      hora: ['', Validators.required], // HH:MM
      motivo: ['']
    });
  }

  ngOnInit(): void {

    // Cargar mascotas usando la API del servicio (tipado seguro)
    this.mascotas = this.mascotaService.getAll();

    // Suscribir cambios de fecha para actualizar franjas disponibles.
    this.fechaSub = this.form.get('fecha')?.valueChanges.subscribe((val) => {
      if (val) {
        this.availableSlots = this.citaService.getAvailableSlotsOn(val);
      } else {
        this.availableSlots = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.fechaSub?.unsubscribe();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }


    const mascotaId = this.form.value.mascotaId as string;
    const fecha = this.form.value.fecha as string;
    const hora = this.form.value.hora as string;
    const motivo = (this.form.value.motivo as string) || undefined;

    const dt = new Date(`${fecha}T${hora}:00`);
    if (isNaN(dt.getTime())) {
      alert('Fecha u hora inválida. Revisa el formato.');
      return;
    }

    const fechaHoraIso = dt.toISOString();

    this.citaService.create({
      mascotaId,
      fechaHora: fechaHoraIso,
      motivo,
      estado: 'programada'
    });

    alert('Cita agendada correctamente');
    this.form.reset();
    this.availableSlots = [];
  }
}
