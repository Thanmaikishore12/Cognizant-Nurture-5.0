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

import {
  provideStore
} from '@ngrx/store';

import {
  provideState
} from '@ngrx/store';

import {
  provideEffects
} from '@ngrx/effects';

import { routes } from './app.routes';

import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';

import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideStore(),

    provideState('course', courseReducer),

    provideEffects([CourseEffects]),

    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor
      ])
    )

  ]

};