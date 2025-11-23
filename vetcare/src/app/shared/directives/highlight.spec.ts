import { Highlight } from './highlight';
import { ElementRef, Renderer2 } from '@angular/core';

describe('Highlight', () => {
  it('should create an instance', () => {
    // Mocks simples
    const elMock = { nativeElement: document.createElement('div') } as ElementRef;

    // SOLUCIÓN: Usamos 'as unknown as Renderer2' para forzar el tipado
    const rendererMock = {
      setStyle: () => {}
    } as unknown as Renderer2;

    const directive = new Highlight(elMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
