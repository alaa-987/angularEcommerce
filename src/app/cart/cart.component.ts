import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private _CartService:CartService){}
  allProduct!:any;
  cartNum!:number;
  num!:number;
  cId!:string;
  totalPrice!:number;
  deleteMessage!:string;
  loading:boolean = false;
  ngOnInit(): void {
    localStorage.setItem("currentPage","/cart");
    this.loading=true;
    this._CartService.getAllCart().subscribe({
      next:(res)=>{
       this.allProduct=res.data.products;
       this.cartNum=res.numOfCartItems;
       this.cId=res.data._id;
       this.loading=false;
      },
      error:(err)=>{
        console.log(err);
        this.loading=false;
      }
    })
   }
   deleteProduct(pId:string){
    this.loading=true;
     this._CartService.deleteItem(pId).subscribe({
      next:(res)=>{
        this.allProduct =res.data.products;
        this.cartNum=res.numOfCartItems;
        this.loading=false;
      },
      error:(err)=>{
        console.log(err);
        this.loading=false;
      }
     })
   }
   updateProduct(pId:string,count:number){
    this.loading=true;
     if(count==0){
      this.deleteProduct(pId);
      return;
     }
     this._CartService.updateCart(pId,count).subscribe({
      next:(res)=>{
        this.allProduct=res.data.products;
        this.cartNum=res.numOfCartItems;
        this.loading=false;
      },
      error:(err)=>{
        console.log(err);
        this.loading=false;
      }
     })
   }
   clearCart(){
    this.loading=true;
    this._CartService.clearCart().subscribe({
      next:(res)=>{
        this.deleteMessage = res.data._id;
        this.allProduct=null;
        this.cartNum=res.numOfCartItems;
        this.loading=false;
      },
      error:(err)=>{
        console.log(err);
        this.loading=false;
      }
    })
   }
}
