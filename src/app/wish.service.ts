import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl: string = "https://ecommerce.routemisr.com";
  header ={token: localStorage.getItem("usertoken")!};
  addWish(pId:string):Observable<any>
  {
    let body ={productId:pId};
    return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,body,{
      headers:this.header
    })
  }
  viewWishes():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`,{
      headers:this.header
    })
  }
  deleteWish(pId:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${pId}`,{
      headers:this.header
    })
  }
}
