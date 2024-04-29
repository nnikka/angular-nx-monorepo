import { Route } from '@angular/router';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Pg1Component,
  },
  {
    path: 'pg2',
    component: Pg2Component,
  },
];
