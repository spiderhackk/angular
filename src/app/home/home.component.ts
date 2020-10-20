import { SearchServiceService } from './../search-service.service';
import { baseUrl } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   item:any[]=[]
   images:any[]=[]
   count:any
  
  
  constructor( private search: SearchServiceService){
    this.images=[
      {"id":1,"path":"./assets/images/one7.jpg"},
      {"id":2,"path":"./assets/images/iphonepro.jpg"},
      {"id":3,"path":"./assets/images/image.jpg"},
      {"id":3,"path":"./assets/images/applemac.jpg"}
    ]
  }
  
  ngOnInit(){
    this.search.product().subscribe(responce =>{this.item=responce
    });
    this.addCart;
    this.profile()
  }

  addCart(ProductsId):void{
    let payload={
      ProductsId:ProductsId
    }
    this.search.addCart(payload).subscribe(responce=>{responce
      this.count++
    })
    alert("Item added to cart")
    }

    profile(){
      this.search.profile().subscribe(data=>{this.count=data
        console.log(data)
      })
    }
   
  }



