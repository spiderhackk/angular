import { baseUrl } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDisplayService {
  get_token=localStorage.getItem('token')
  token={Authorization:this.get_token}

  constructor(private http:HttpClient) { }

  public searchItem(payload){
    return this.http.post<any>(`${baseUrl}search`,payload,{headers:this.token})
  }
}
