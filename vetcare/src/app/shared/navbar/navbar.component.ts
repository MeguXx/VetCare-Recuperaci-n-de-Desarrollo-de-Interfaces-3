import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="logo">
        <span class="logo-icon">🐾</span>
        <span class="logo-text">VetCare</span>
      </a>
      <div class="nav-spacer"></div>
      <a routerLink="/" class="nav-home">Inicio</a>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      background: linear-gradient(90deg, #2d7aee 0%, #1e5acc 100%);
      color: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
    .logo:hover {
      opacity: 0.9;
    }
    .logo-icon {
      font-size: 20px;
    }
    .nav-spacer {
      flex: 1;
    }
    .nav-home {
      color: white;
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 4px;
      background: rgba(255,255,255,0.15);
      font-size: 14px;
      cursor: pointer;
    }
    .nav-home:hover {
      background: rgba(255,255,255,0.25);
    }
  `]
})
export class NavbarComponent {}
