import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  get_token=localStorage.getItem('token')
  token={Authorization:this.get_token}

  constructor(private http:HttpClient) { }

  public product(){
    return this.http.get<any>(`${baseUrl}products`)
  }

  addCart(payload){
    return this.http.post<any>(`${baseUrl}add/cart`,payload,{headers:this.token})
  }

  displayCart(){
    return this.http.get<any>(`${baseUrl}cart`,{headers:this.token})
  }

  remove(payload){
    return this.http.post<any>(`${baseUrl}delete/cart`,payload,{headers:this.token})
  }

  profile(){
    return this.http.get<any>(`${baseUrl}profile`,{headers:this.token})
  }
  
}
