import { Component, OnInit } from '@angular/core';
import{AuthService}from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  msg:any;

  constructor(private authService : AuthService,private routes :Router) { }

  ngOnInit(): void {
  }
  
    check(uname: string, p : string)
    {
      var output = this.authService.checkUser(uname, p);
      if(output == true)
      {
        this.routes.navigate(['/student-form']);
      }
      else{
       this.msg ='Invalid username or password';
       alert(this.msg)
      }
    }

}
