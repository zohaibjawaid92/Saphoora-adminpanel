import { Routes } from '@angular/router';
import { UserManagementAddComponent} from './user-management-add/user-management-add.component';

export const UserManagementRoutes: Routes = [
  {
    path: '',
    component: UserManagementAddComponent,
    data: { title: 'Edit', breadcrumb: 'EDIT' }
  }
];