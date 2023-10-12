import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import {BehaviorSubject, Observable} from 'rxjs'

interface registerInterface
{
  name:string;
  email:string ;
  password:string;
  rePassword : string ;
  phone : string;
}
interface loginInterface
{
  email:string ;
  password:string;
}

@Injectable({
  providedIn: 'root'
})



export class AuthService {

  baseUrl : string = "https://ecommerce.routemisr.com";
  userDataTok: BehaviorSubject<any> = new BehaviorSubject(null) ;

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem("usertoken") == null){
      this._Router.navigate(['/login'])
    }
    else{
      this.saveData()
      if(localStorage.getItem("currentPage") != "/cart"){
        this._Router.navigate([localStorage.getItem("currentPage")]);
      }
    }
   }


  sendRegister(resgiterData:registerInterface):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+"/api/v1/auth/signup" , resgiterData)
  }
  sendlogin(loginData:loginInterface):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+"/api/v1/auth/signin" , loginData)
  }
  saveData(){
   this.userDataTok.next(localStorage.getItem("usertoken"));
   if(this.userDataTok.getValue() != null){
    this.userDataTok.next(jwtDecode(this.userDataTok.getValue()));
   }
   else{
    this.userDataTok.next(null);
   }
  }
 sendEmail(emailData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+"/api/v1/auth/forgotPasswords" , emailData)
  }
  sendcode(codeData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+"/api/v1/auth/verifyResetCode" , codeData)
  }
  sendNewPass(passData:any):Observable<any>
  {
    return this._HttpClient.put(this.baseUrl+"/api/v1/auth/resetPassword" , passData)
  }

}
