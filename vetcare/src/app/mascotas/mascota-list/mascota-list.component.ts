import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../../shared/models';

@Component({
  selector: 'app-mascota-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.cargarMascotas(); // Es mejor llamar a tu función cargarMascotas aquí para no repetir código
  }

  cargarMascotas(): void {
    this.mascotas = this.mascotaService.getAll();
    console.log('Mascotas cargadas:', this.mascotas);
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta mascota? Se borrará de la lista.')) {
      this.mascotaService.delete(id);
      this.cargarMascotas();
    }
  }

  // --- NUEVA FUNCIÓN PARA CONTROLAR LAS IMÁGENES ---
  obtenerImagen(especie: string): string {
    if (!especie) return '/assets/icons/icon-other-square.jpg'; // Por si viene vacío

    const especieNormalizada = especie.toLowerCase().trim();

    if (especieNormalizada === 'perro') {
      return '/assets/icons/icon-dog-square.png';
    } else if (especieNormalizada === 'gato') {
      return '/assets/icons/icon-cat-square.jpg';
    } else {
      return '/assets/icons/icon-other-square.jpg';
    }
  }
}
