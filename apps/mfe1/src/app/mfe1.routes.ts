import { Route } from '@angular/router';
import { Pg2Component } from './pg2/pg2.component';
import { AppComponent } from './app.component';
import { Pg1Component } from './pg1/pg1.component';

export const MFE1_ROUTES: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: Pg1Component,
      },
      {
        path: 'pg2',
        component: Pg2Component,
      },
    ]
  },
];
