import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl: string = "https://ecommerce.routemisr.com";
  getBrand():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/brands`)
  }
}
