import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTabsModule,
  MatExpansionModule,
  MatInputModule,
  MatProgressBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from './../../shared/shared.module';
import { UserManagementRoutes } from "./user-management.routing";
import { UserManagementAddComponent } from './user-management-add/user-management-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserManagementService} from './user-management.service';
import { authInterceptor} from '../_helpers/api.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    SharedModule,
    RouterModule.forChild(UserManagementRoutes)
  ],
  providers : [ [UserManagementService , { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }]],
  declarations: [
   
  UserManagementAddComponent]
})
export class UserManagementModule { }
