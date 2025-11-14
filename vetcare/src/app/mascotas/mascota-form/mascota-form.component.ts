import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mascota-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', Validators.required],
      dueno: this.fb.group({
        nombre: ['', Validators.required],
        telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]]
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Mascota registrada:', this.form.value);
      alert('Mascota registrada correctamente');
      this.form.reset();
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}




