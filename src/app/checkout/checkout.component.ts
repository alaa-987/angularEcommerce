import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
OrdersService

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cId!:string;
  loading!:boolean;
  constructor(private _ActivatedRoute:ActivatedRoute, private _OrdersService:OrdersService){}
  ngOnInit(): void {
    // localStorage.setItem("currentPage","/checkout");
    this.cId=this._ActivatedRoute.snapshot.params['cId'];
  }
  checkoutForm:FormGroup = new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })
  paySubmit(pForm:FormGroup){
    this._OrdersService.pay(this.cId,pForm.value).subscribe({
      next:(res)=>{
        console.log(res.session.url);
        window.location.href=res.session.url;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
