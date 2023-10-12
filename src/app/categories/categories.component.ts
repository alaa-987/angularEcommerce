import { Brand } from './../product-in';
import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  constructor(private _CategoriesService:CategoriesService){}
  allCat!:Brand[];
  loading:boolean=false;
  ngOnInit(): void {
    localStorage.setItem("currentPage","/categories");
    this.loading=true;
    this._CategoriesService.allCat().subscribe({
      next:(res)=>{
        this.loading=false;
        this.allCat=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
   }
}
