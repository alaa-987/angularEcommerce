import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logout(){
    localStorage.removeItem("usertoken");
    this._AuthService.saveData();
    this._Router.navigate(['/login'])
  }
  itemsNav!:number;
  isLogin : boolean =false;
constructor( private _AuthService: AuthService, private _Router:Router, private _CartService:CartService){

}
ngOnInit(): void {
  this._CartService.numberOfCarts.subscribe(
    ()=>{
      this.itemsNav=this._CartService.numberOfCarts.getValue();
    }
  )
 this._AuthService.userDataTok.subscribe(
  ()=>{
    if(this._AuthService.userDataTok.getValue() ==null){
      this.isLogin =false
    }
    else{
      this.isLogin = true;
    }
  }
 )
}
}
