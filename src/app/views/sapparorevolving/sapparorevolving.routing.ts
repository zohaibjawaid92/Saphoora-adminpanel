import { Routes } from '@angular/router';
import { OverviewComponent} from './overview/overview.component';

export const SapparoRevolvingRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    data: { title: 'Spring Mountain', breadcrumb: 'Spring Mountain' }
  }
];