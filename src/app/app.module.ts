import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AuthService } from './student-form/auth/auth.service';
import { AuthGuard } from './student-form/auth/auth.guard';
import { NgSelectModule } from '@ng-select/ng-select';
import { StudentFormModule } from './student-form/student-form.module';
// import { s } from '@ngx-share/buttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    HttpClientModule,       // (Required) For share counts
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleChartsModule,
    NgSelectModule,
    StudentFormModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule.forRoot()
  ],
 
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
