import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';

const routes: Routes = [
  { path: '', component: MascotaFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MascotaFormComponent,
    RouterModule.forChild(routes)
  ]
})
export class MascotasModule { }
