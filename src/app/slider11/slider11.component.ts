import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider11',
  templateUrl: './slider11.component.html',
  styleUrls: ['./slider11.component.scss']
})
export class Slider11Component {
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
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  img1:string="assets/images/41nN4nvKaAL._AC_SY200_.jpg";
  img2:string="assets/images/61cSNgtEISL._AC_SY200_.jpg";
  img3:string="assets/images/slider-2.jpeg";
  img4:string="assets/images/slider-image-1.jpeg";
  img5:string="assets/images/slider-image-2.jpeg";
  img6:string="assets/images/slider-image-3.jpeg";
  img7:string="assets/images/grocery-banner.png";
  img8:string="assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg";
  img9:string="assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg";
}
