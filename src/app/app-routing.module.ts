import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarksChartComponent } from './student-form/marks-chart/marks-chart.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-form/student-list/student-list.component';
import { LoginComponent } from './student-form/auth/login/login.component';
import { AuthGuard } from './student-form/auth/auth.guard';
import { AdminComponent } from './student-form/auth/admin/admin.component';
import { AuthLoginGuard } from './student-form/auth/auth-login.guard';

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
    component:StudentListComponent ,
    canActivate:[AuthLoginGuard]

  },
    
      {
    path :'student-list/student-form',
    loadChildren :() =>import('./student-form/student-form.module').then(mod=>mod.StudentFormModule)
    },
    {
      path :'student-form',
      component:StudentFormComponent,
      canActivate:[AuthGuard]

    },
    {
      path:'login',
      component:LoginComponent
      
    },
    {
      path:'admin',
      component:AdminComponent
    },
    { 
      path: 'student-list',
      component: StudentListComponent,
      
    },
    
    {
      path :'**',
      redirectTo :''
    }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
