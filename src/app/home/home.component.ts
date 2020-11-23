import { SearchServiceService } from './../search-service.service';
import { baseUrl } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Toast, ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   item:any[]=[]
   images:any[]=[]
   public count:number;
   toast_message:any;
  
  
  constructor( private search: SearchServiceService, private toaster:ToastrService){
    this.images=[
      {"id":3,"path":"./assets/images/applemac.jpg"},
      {"id":4,"path":"./assets/images/iphonepro.jpg"},
      {"id":5,"path":"./assets/images/jeans.jpg"},
      {"id":5,"path":"./assets/images/onepiece.jpg"},
      {"id":6,"path":"./assets/images/realme.jpeg"},
      {"id":7,"path":"./assets/images/tv.jpeg"},
      {"id":8,"path":"./assets/images/nike.jpeg"},
      {"id":9,"path":"./assets/images/sweater.jpg"},


    ];
  }
  
  ngOnInit(){
    this.search.product().subscribe(responce =>{this.item=responce
    });
    this.addCart;
    this.profile()
  }

  addCart(ProductsId,path):void{
    let payload={
      ProductsId:ProductsId,
      path:path

    }
    this.search.addCart(payload).subscribe(responce=>{responce
      this.toaster.success(responce[0])
      let message=responce[1]
     
      if(message==200){
        console.log(this.toast_message);
        
        this.count=responce[2]
        localStorage.setItem("path",path)
      }
      else{
        alert("Item already in cart")
      }
    })
    }

    profile(){
      this.search.profile().subscribe(data=>{this.count=data
        console.log(data)
      })
    }
   
  }




