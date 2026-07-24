import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  provideRouter
} from '@angular/router';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideHttpClient(
     withInterceptors([
  authInterceptor,
  errorHandlerInterceptor,
  loadingInterceptor
])
    )

  ]

};