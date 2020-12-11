import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  MatDatepickerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTabsModule,
  MatExpansionModule,
  MatInputModule,
  MatProgressBarModule
 } from '@angular/material';
 import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from './../../shared/shared.module';
import { SapparoRevolvingRoutes } from "./sapparorevolving.routing";
import { OverviewComponent } from './overview/overview.component';
import { ComplianceComponent } from './ui/compliance/compliance.component';
import { MaintainanceComponent } from './ui/maintainance/maintainance.component';
import { CalenderComponent } from './ui/calender/calender.component';
import { ResourcesComponent } from './ui/resources/resources.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
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
    RouterModule.forChild(SapparoRevolvingRoutes)
  ],
  declarations: [OverviewComponent, ComplianceComponent, MaintainanceComponent,CalenderComponent, ResourcesComponent]
})
export class SapparoRevolvingModule { }
