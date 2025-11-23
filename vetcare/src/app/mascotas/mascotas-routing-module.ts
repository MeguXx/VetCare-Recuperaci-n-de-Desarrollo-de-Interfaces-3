import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';

const routes: Routes = [

  { path: '', component: MascotaListComponent },


  { path: 'registro', component: MascotaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
