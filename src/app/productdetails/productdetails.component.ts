import { OwlOptions } from 'ngx-owl-carousel-o';
import { product } from './../product-in';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { WishService } from '../wish.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  pId!:string;
  pInfo!:product;
  loading:boolean=false;
 constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService,private _CartService :CartService, private _WishService:WishService, private _ToastrService:ToastrService ){}
 ngOnInit(): void {
   this.pId =this._ActivatedRoute.snapshot.params['ID'];
   this._ProductsService.specProducts(this.pId).subscribe({
    next:(res)=>{
      this.pInfo=res.data;
      console.log(res.data)
    },
    error:(err)=>{
      console.log(err)
    }
   })
 }
 cartClick(pId:string){
  this.loading=true;
   this._CartService.addToCart(pId).subscribe({
    next:(res)=>{
      // alert(res.message);
      this._CartService.numberOfCarts.next(res.numOfCartItems);
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
