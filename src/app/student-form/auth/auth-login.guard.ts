import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private authService :AuthService,private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( localStorage.getItem('loggeduser')!= null ){
        console.log("auth guard called.login...with authorised user ")
      //localStorage.removeItem('loggeduser') ;
        console.log("item")
        return true;
           
      }
          else
        {
            alert('enter your valid email id')
            this.router.navigate(['/login']);
            return false;
          }
  }
  
}
