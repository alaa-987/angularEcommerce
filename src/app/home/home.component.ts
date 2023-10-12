import { WishService } from './../wish.service';
import { product } from './../product-in';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  parentData!:string;
  allProducts!:product[];
  loading:boolean=false;
  userWord:string="";
  constructor(private _ProductsService:ProductsService, private _CartService:CartService , private _WishService:WishService , private _ToastrService:ToastrService  ){}
 ngOnInit(): void {
  localStorage.setItem("currentPage","/home");
  document.querySelector(".modal-backdrop")?.remove();
  document.body.classList.add("overflowY-auto");
  this.loading=true;
  this._ProductsService.allProducts().subscribe(
    {
      next:(res)=>{
       this.allProducts= res.data;
       this.loading=false;
       console.log(res.data)
      },
      error:(err)=>{
        console.log(err);
        this.loading=false;
      }
    }
  )
 }
 cartClick(pId:string){
  this.loading=true;
   this._CartService.addToCart(pId).subscribe({
    next:(res)=>{
      // alert(res.message);
      this._CartService.numberOfCarts.next(res.numOfCartItems);
      this._ToastrService.success('It has been successfully added.');
      this.loading=false;
    },
    error:(err)=>{
      console.log(err);
      this.loading=false;
    }
   })
 }
 addToWish(pId:string){
   this.loading=true;
   this._WishService.addWish(pId).subscribe({
    next:(res)=>{
      this.loading=false;
      this._ToastrService.success('It has been successfully added.');
      document.querySelector(".fa-heart")?.classList.add("text-danger");
      console.log(res);
    },
    error:(err)=>{
      console.log(err)
    }
   })
 }

}
