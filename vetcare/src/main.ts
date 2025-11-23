import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeEs, 'es');

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),

    { provide: LOCALE_ID, useValue: 'es' }
  ]
}).catch(err => console.error(err));
