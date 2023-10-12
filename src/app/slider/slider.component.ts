import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Brand } from '../product-in';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
constructor(private _CategoriesService:CategoriesService){}
allCat!:Brand[];
ngOnInit(): void {
 this._CategoriesService.allCat().subscribe({
  next:(res)=>{
    this.allCat=res.data
  },
  error:(err)=>{
    console.log(err)
  }
 })
}
}
