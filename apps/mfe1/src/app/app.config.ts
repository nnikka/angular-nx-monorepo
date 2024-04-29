import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MFE1_ROUTES } from './mfe1.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(MFE1_ROUTES)],
};
