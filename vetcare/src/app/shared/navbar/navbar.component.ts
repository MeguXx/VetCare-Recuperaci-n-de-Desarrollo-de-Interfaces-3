import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-icon">🐾</span>
          <div class="logo-text">
            <span class="brand">VetCare</span>
            <span class="slogan">Gestión Clínica</span>
          </div>
        </a>

        <div class="nav-spacer"></div>

        <a routerLink="/" class="nav-link-home">
          Inicio
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%);
      color: white;
      box-shadow: 0 4px 20px rgba(79, 70, 229, 0.2);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1100px;
      margin: 0 auto;
      width: 90%;
      display: flex;
      align-items: center;
      padding: 12px 0;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: white;
      transition: opacity 0.2s;
    }

    .logo:hover {
      opacity: 0.9;
    }

    .logo-icon {
      font-size: 28px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }

    .brand {
      font-weight: 800;
      font-size: 20px;
      letter-spacing: -0.5px;
    }

    .slogan {
      font-size: 11px;
      opacity: 0.8;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 2px;
    }

    .nav-spacer {
      flex: 1;
    }

    .nav-link-home {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      text-decoration: none;
      padding: 8px 20px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.2s;
    }

    .nav-link-home:hover {
      background: white;
      color: #684abd;
      transform: translateY(-1px);
    }
  `]
})
export class NavbarComponent {}
