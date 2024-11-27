import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authHttpInterceptorFn } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      domain: 'philemonphilippin.eu.auth0.com',
      clientId: 'DxyPUtOYEV9ljMZsSVbeL1iOOctVoIdZ',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://localhost:7273/api',
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://localhost:7273/api/*',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://localhost:7273/api',
              },
            },
          },
        ],
      },
    }),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
