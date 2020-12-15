import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Quick Stats', breadcrumb: 'QUICK STATS' }
  }
];