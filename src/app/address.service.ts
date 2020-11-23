import { baseUrl } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  get_token=localStorage.getItem('token')  
  token={Authorization:this.get_token}  

  constructor(private http:HttpClient) { }

  addAddress(data){
    return this.http.post<any>(`${baseUrl}/address`,data,{headers:this.token})

  }
}
