import { Injectable } from '@angular/core';
import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchitemService {
  get_token=localStorage.getItem('token')
  token={Authorization:this.get_token}

  constructor( private http:HttpClient) { }
  


  placed_order(){
    return this.http.get<any>(`${baseUrl}paynow`,{headers:this.token})
  }
}
