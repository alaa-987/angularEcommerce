import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl : string = "https://ecommerce.routemisr.com";
  allCat():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`);
  }
}
