import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {
  get_token=localStorage.getItem('token')
  token={Authorization:this.get_token}

  constructor(private http:HttpClient) { }


  insub(data):Observable<any>{
    return this.http.post<any>(`${baseUrl}/inventory`,data,{headers:this.token})

  }
}
