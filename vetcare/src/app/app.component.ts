import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      :host { display: flex; flex-direction: column; height: 100vh; }
      .content { flex: 1; overflow-y: auto; }
    `
  ]
})
export class AppComponent {}
