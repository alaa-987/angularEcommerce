import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = "https://ecommerce.routemisr.com";
  constructor(private _HttpClient:HttpClient) { }
  allProducts():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`)
  }
  specProducts(pId:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${pId}`)
  }
}