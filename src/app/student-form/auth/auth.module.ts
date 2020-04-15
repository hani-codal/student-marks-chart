import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [LoginComponent, AdminComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
