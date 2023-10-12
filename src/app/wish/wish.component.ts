
import { Component } from '@angular/core';
import { WishService } from '../wish.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent{
constructor(private _WishService:WishService, private _CartService:CartService, private _ToastrService:ToastrService){}
allProduct!:any;
loading!:boolean;
ngOnInit(): void {
  this.loading=true;
  localStorage.setItem("currentPge","/wish");
  this._WishService.viewWishes().subscribe({
    next:(res)=>{
      this.allProduct=res.data;
      this.loading=false;
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
refreshWish(){
  this._WishService.viewWishes().subscribe({
    next:(res)=>{
      this.allProduct=res.data;
      this.loading=false;
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
removeWish(pId:string){
  this.loading=true;
  this._WishService.deleteWish(pId).subscribe({
    next:(res)=>{
      this.loading=false;
      this.refreshWish();
      console.log(res)
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
      this._ToastrService.success('It has been successfully added.');
      this.loading=false;
    },
    error:(err)=>{
      console.log(err);
      this.loading=false;
    }
   })
 }
}
