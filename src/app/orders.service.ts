import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl: string = "https://ecommerce.routemisr.com";
  header ={token: localStorage.getItem("usertoken")!};
  constructor(private _HttpClient:HttpClient) { }
  pay(cId:any,vForm:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cId}?url=http://localhost:4200`,{shippingAddress:vForm},
    {headers:this.header})
  }
  getOrders(cId:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${cId}`)
  }
}
