import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth2: any;
 
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
 
  constructor(private router: Router,private authService :AuthService  ) { }
 
  ngOnInit() {
 
    this.googleSDK();
  }

 //for pop up dialog box
 profile:any;
 e;
  prepareLoginButton() {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
 
        this.profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + this.profile.getId());
        //this.authService.setGoogleEmail(this.profile.getEmail());
        console.log('Name: ' + this.profile.getName());
        console.log('Image URL: ' +this. profile.getImageUrl());
        console.log('Email: ' +this.profile.getEmail());
       //this.e= this.authService.getEmail();
       //console.log(this.e)
       //if(this.e == this.profile.getEmail()){
        window.location.assign(`/student-list`); 
      // } 
      //  else{
      //    alert("you do not have permission")
      //  }
        //YOUR CODE HERE
 
 
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
 
  }
  // load google platform
  googleSDK() {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '51455150435-nfgts9gdnssk3d0bjbt6nu8546iv39h4.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }
 
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
 
  }
 

}
