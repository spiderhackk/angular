import { Router, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StockComponent } from './stock/stock.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';
import { SearchitemComponent } from './searchitem/searchitem.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ToastrModule,ToastContainerModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    HomeComponent,
    InventoryComponent,
    StockComponent,
    SearchComponent,
    SignupComponent,
    AddressComponent,
    SearchitemComponent,
    MyorderComponent,
    ItemDisplayComponent
],
  imports:[
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
      closeButton:true,
      timeOut:5000,
    }
      
    ) ,
    ToastContainerModule,
    BrowserAnimationsModule,      
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:LoginComponent},
      {path:'home', component:HomeComponent},
      {path:'cart',component:SearchComponent},
      {path:"address",component:StockComponent},
      {path:'home/search',component:SearchComponent},
      {path:"signup",component:SignupComponent},
      {path:"addAddress",component:AddressComponent},
      {path:"paynow",component:SearchitemComponent},
      {path:"MyOrder",component:MyorderComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
