import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentFormRoutingModule } from './student-form-routing.module';
import { MarksChartComponent } from './marks-chart/marks-chart.component';
import { StudentFormComponent } from './student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [StudentFormComponent,MarksChartComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GoogleChartsModule,
    NgSelectModule
  ]
})
export class StudentFormModule { }
