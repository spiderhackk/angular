import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyorderService {
  get_token=localStorage.getItem('token')
  token={Authorization:this.get_token}

  constructor(private http:HttpClient) { }

  public order_history(){
    return this.http.get<any>(`${baseUrl}/myorderhistory`,{headers:this.token})
  }

  remove(payload){
    return this.http.post<any>(`${baseUrl}cancel`,payload,{headers:this.token})
  }
}
