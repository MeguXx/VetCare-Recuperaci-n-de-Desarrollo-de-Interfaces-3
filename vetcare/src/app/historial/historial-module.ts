import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing-module';
import { HistorialView } from './historial-view/historial-view';


@NgModule({
  declarations: [
    HistorialView
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule
  ]
})
export class HistorialModule { }
