import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CitaFormComponent } from './cita-form/cita-form.component';
import { CitaListComponent } from './cita-list/cita-list.component';
import { EstadoCitaPipe } from './pipes/estado-cita.pipe';

const routes: Routes = [
  { path: '', component: CitaListComponent },
  { path: 'agendar', component: CitaFormComponent }
];

@NgModule({
  declarations: [CitaFormComponent, CitaListComponent, EstadoCitaPipe],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class CitasModule {}
