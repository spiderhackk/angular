import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {
  items:any[]=[]
  get_token=localStorage.getItem('token')
  token={Authorization:this.get_token}
  

  constructor(private http:HttpClient) { }

  checkout_address(){
    return this.http.get<any>(`${baseUrl}checkout/address`,{headers:this.token})
  }

 
}
