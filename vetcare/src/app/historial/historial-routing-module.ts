import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialView } from './historial-view/historial-view.component';

const routes: Routes = [
  { path: '', component: HistorialView }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
