import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-mascota-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', Validators.required],
      raza: [''],
      edad: ['', [Validators.required, Validators.min(0)]], // <--- CAMBIO: Validamos que sea número
      dueno: this.fb.group({
        nombre: ['', Validators.required],
        telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]]
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formVal = this.form.value;

      this.mascotaService.registrarMascota({
        nombre: formVal.nombre,
        especie: formVal.especie,
        raza: formVal.raza,
        edad: Number(formVal.edad), // <--- CAMBIO: Aseguramos que sea número
        duenoNombre: formVal.dueno.nombre,
        duenoTelefono: formVal.dueno.telefono
      });

      alert('Mascota registrada correctamente');
      this.router.navigate(['/mascotas']);
    } else {
      this.form.markAllAsTouched();
      alert('Por favor, completa todos los campos.');
    }
  }
}
