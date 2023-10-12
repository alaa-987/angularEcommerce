import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AddressComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
