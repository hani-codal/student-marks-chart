import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form.component';
import { LoginComponent } from './auth/login/login.component';
import { MarksChartComponent } from './marks-chart/marks-chart.component';

import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  // {
  //   path :'login',
  //   component :LoginComponent
  // },
  // {
  //   path:'student-list',
  //   component:MarksChartComponent
  // }
  // {
  //   path:'student-list/student-form',
  //   component:StudentListComponent
  // }
  ,
  // { 
  //   path: 'student-list',
  //   component: StudentListComponent,
  //   canActivate: [AuthGuard] 
  // },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentFormRoutingModule { }
