import { Brand } from './../product-in';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  allBrands!:Brand[];
  loading:boolean=false;
  constructor(private _BrandService:BrandService){}
  ngOnInit(): void {
    localStorage.setItem("currentPage","/brands");
    this.loading=true;
    this._BrandService.getBrand().subscribe({
      next:(res)=>{
        this.loading=false;
        this.allBrands=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
   }

}
