import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService :AuthService,private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if(this.authService.isAdminRights()){
  //     return true;
  //   }
  //   else{
  //     alert("u don't have permission to view this page,Redirecting to home...");
  //     this.router.navigate(['login'])
  //   }

  if(localStorage.getItem('username')!= null){
    console.log("auth guard called....with authorised user ")
    localStorage.removeItem('username') ;
    console.log("item")
    return true;
       
  }
      else
      {
        this.router.navigate(['/admin']);
        return false;
      }


   }
  
}
