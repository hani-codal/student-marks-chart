import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarksChartComponent } from './student-form/marks-chart/marks-chart.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo :'login',
  //   pathMatch :'full'  
  //   },
    {
        path :'',
        loadChildren :() =>import('./student-form/auth/auth.module').then(mod=>mod.AuthModule)
      },
  {
    path :'student-list',
    component:MarksChartComponent},
    
      {
    path :'student-list/student-form',
    loadChildren :() =>import('./student-form/student-form.module').then(mod=>mod.StudentFormModule)
    },
    {
      path :'student-form',
      component:StudentFormComponent

    }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
