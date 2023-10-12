import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"",redirectTo:"address",pathMatch:'full'},
  {path:"address",component:AddressComponent},
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
