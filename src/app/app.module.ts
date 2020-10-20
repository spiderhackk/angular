import { Router, RouterModule } from '@angular/router';
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



@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    HomeComponent,
    InventoryComponent,
    StockComponent,
    SearchComponent,
    SignupComponent
],
  imports:[
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:LoginComponent},
      {path:'home', component:HomeComponent},
      {path:'cart',component:SearchComponent},
      {path:"address",component:StockComponent},
      {path:'home/search',component:SearchComponent},
      {path:"signup",component:SignupComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
