import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  errorMessage! : string ;
  modalMessage! : string ;
  loading:boolean = false;
  isCodeForm:boolean =false;
  isNewPass:boolean =false;
  
  
    loginForm : FormGroup = new FormGroup({ 
      email : new FormControl(null,[Validators.required , Validators.email]) ,
      password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]) 
    })
  
    constructor(private _AuthService:AuthService , private _Router:Router ){}

    loginSubmit(rForm : FormGroup)
    {
  
      this.loading = true;
  

      this._AuthService.sendlogin(rForm.value).subscribe({
  
        next : (res)=>{
          // lw el donia tama ==> login
          // programming routing
          if(res.message == "success"){
            this._Router.navigate(['./home']);
            localStorage.setItem("usertoken", res.token);
            this._AuthService.saveData();
          }
          this.loading = false;
  
        } ,
  
        error : (err)=>{
          this.errorMessage = err.error.message;
          this.loading = false;
        } 
  
       
  
        
  
      })
    }
    
    forgetForm : FormGroup = new FormGroup({ 
      email : new FormControl(null,[Validators.required , Validators.email])
    })
  
    forgetSubmit(rForm : FormGroup)
    {
  
      this.loading = true;
  

      this._AuthService.sendEmail(rForm.value).subscribe({
  
        next : (res)=>{
       if(res.statusMsg == "success"){
        this.isCodeForm= true;
        this.loading = false;
       }
        } ,
  
        error : (err)=>{
         this.modalMessage = err.error.message;
         this.loading = false;
        } 
      })
    }
    codeForm : FormGroup = new FormGroup({ 
      resetCode : new FormControl(null,[Validators.required])
    })
    codeSubmit(rForm : FormGroup)
    {
  
      this.loading = true;

      this._AuthService.sendcode(rForm.value).subscribe({
  
        next : (res)=>{
       if(res.status == "Success"){
         this.isNewPass =true;
         this.isCodeForm=false;
         this.loading = false;
       }
        } ,
  
        error : (err)=>{
          this.modalMessage = err.error.message;
          this.loading = false;
        } 
      })
  
}
newForm : FormGroup = new FormGroup({ 
  email : new FormControl(null,[Validators.required , Validators.email]) ,
  newPassword : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]) 
})
PassSubmit(rForm : FormGroup)
{

  this.loading = true;
  this._AuthService.sendNewPass(rForm.value).subscribe({

    next : (res)=>{
      this._Router.navigate(['/home']);
      localStorage.setItem("usertoken", res.token);
      this._AuthService.saveData();
      this.loading = false;
      
    } ,

    error : (err)=>{
      this.modalMessage = err.error.message;
      this.loading = false;
    } 

  })
}

}
