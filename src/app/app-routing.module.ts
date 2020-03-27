import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo :'student-form',
  pathMatch :'full'    },
  {
    path :'student-form',
    loadChildren :() =>import('./student-form/student-form.module').then(mod=>mod.StudentFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
