import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight implements OnInit {
  // Recibimos la fecha de la cita como entrada
  @Input('appHighlight') fechaCita: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (!this.fechaCita) return;

    const fecha = new Date(this.fechaCita).setHours(0,0,0,0);
    const hoy = new Date().setHours(0,0,0,0);
    const manana = new Date(hoy);
    manana.setDate(manana.getDate() + 1);

    // Lógica: Si es HOY -> Verde. Si es MAÑANA -> Naranja.
    if (fecha === hoy) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid #28a745'); // Borde Verde
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#e6fffa');     // Fondo suave
    } else if (fecha === manana.getTime()) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid #fd7e14'); // Borde Naranja
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fff3cd');     // Fondo suave
    }
  }
}
