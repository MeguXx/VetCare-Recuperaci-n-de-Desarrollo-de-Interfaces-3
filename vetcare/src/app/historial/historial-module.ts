import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialRoutingModule } from './historial-routing-module';
import { HistorialView } from './historial-view/historial-view.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    HistorialView
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    SharedModule
  ]
})
export class HistorialModule { }
