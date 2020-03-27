import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFormRoutingModule } from './student-form-routing.module';
import { MarksChartComponent } from './marks-chart/marks-chart.component';



@NgModule({
  declarations: [MarksChartComponent],
  imports: [
    CommonModule,
    StudentFormRoutingModule
  ]
})
export class StudentFormModule { }
