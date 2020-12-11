import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'others', 
    pathMatch: 'full' 
  },

  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'others', 
        loadChildren: './views/others/others.module#OthersModule', 
        data: { title: 'Quick Stats', breadcrumb: 'Quick Stats'}
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user-management', 
        loadChildren: './views/user-management/user-management.module#UserManagementModule', 
        data: { title: 'USER MANAGEMENT', breadcrumb: 'User Management'}
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sapparo', 
        loadChildren: './views/sapparorevolving/sapparorevolving.module#SapparoRevolvingModule', 
        data: { title: 'Sapparo Revolving Sushi', breadcrumb: 'Sapparo Revolving Sushi'}
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

