import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      domain: 'philemonphilippin.eu.auth0.com',
      clientId: 'DxyPUtOYEV9ljMZsSVbeL1iOOctVoIdZ',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
