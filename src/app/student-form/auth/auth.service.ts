import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  myMethod$: Observable<any>;
  //  private myMethodSubject = new Subject<any>();


  Email ="hjoshi@codal.com" ;
  E;
  constructor() {
   // this.myMethod$ = this.myMethodSubject.asObservable();
   
   }
  setGoogleEmail(email){
    
   // this.Email = (email);
    console.log(this.Email,"eeeeeeeeeeeeeeee")
    //if(this.Email ==email){
     console.log(email,"hello i am service email");
 // }//
  //return email;
}
getEmail(){
  return this.Email;
}

//   isAdminRights():boolean{
//     this.E = this.getEmail();
//     console.log(this.E,"email")
//      if(this.Email=== "hjoshi@codal.com" ){
//       return true;
//      }
//      else{
//      return false;
//    }
//  }
 checkUser(uname :string,pwd: string){
  if(uname == "admin" && pwd =="admin123"){
    localStorage.setItem('username',"admin");
    return true;
    }
    else{
      return false;
    }
      }
    // checkLoggedUser(email :string){
    //   if(email != ''){
    //     localStorage.setItem('loggeduser',email);
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // }
 }

