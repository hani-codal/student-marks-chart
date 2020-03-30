import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentFormRoutingModule } from './student-form-routing.module';
import { MarksChartComponent } from './marks-chart/marks-chart.component';
import { StudentFormComponent } from './student-form.component';



@NgModule({
  declarations: [StudentFormComponent,MarksChartComponent],
  imports: [
    CommonModule,
    StudentFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class StudentFormModule { }
