import { AllordersComponent } from './allorders/allorders.component';

import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {path:"" ,  redirectTo : "home" , pathMatch:"full"},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"home" , canActivate :[authGuard],component:HomeComponent},
  {path:"brands" , canActivate :[authGuard],component:BrandsComponent},
  {path:"products" ,canActivate :[authGuard], component:ProductsComponent},
  {path:"wish" ,canActivate :[authGuard], component:WishComponent},
  {path:"allorders" ,canActivate :[authGuard], component:AllordersComponent},
  {path:"cart" , canActivate :[authGuard],component:CartComponent},
  {path:"checkout/:cId" , canActivate :[authGuard], component:CheckoutComponent},
  {path:"productDetails/:ID",canActivate :[authGuard],component:ProductdetailsComponent},
  {path:"categories" , canActivate :[authGuard],component:CategoriesComponent},
  {path:"user", loadChildren: ()=> import('./user/user.module').then((ay7ga)=>ay7ga.UserModule)},
  {path:"**" , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
