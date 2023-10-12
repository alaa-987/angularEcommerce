import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  numberOfCarts:BehaviorSubject<any>=new BehaviorSubject(null);
  baseUrl: string = "https://ecommerce.routemisr.com";
  header ={token: localStorage.getItem("usertoken")!};
  addToCart(pId:string):Observable<any>
  {
    let body ={productId:pId};
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,body,{
      headers: this.header
    })
  }
  updateCart(pId:string,pCount:number):Observable<any>
  {
    let body ={count:pCount};
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${pId}`,body,{
      headers:this.header
    })
  }
  getAllCart():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,{
      headers:this.header
    })
  }
  deleteItem(pId:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${pId}`,{
      headers:this.header
    })
  }
  clearCart():Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`,{
      headers:this.header
    })
  }
  
}
