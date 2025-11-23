import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from './directives/highlight';

@NgModule({
  declarations: [
    Highlight
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Highlight,
    CommonModule
  ]
})
export class SharedModule { }
