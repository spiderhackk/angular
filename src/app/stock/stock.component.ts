import { StockServiceService } from './../stock-service.service';
import { SearchServiceService } from './../search-service.service';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{
  address_details:any[]=[]
 

  constructor(private address:StockServiceService) { }

  ngOnInit(){
    this.checkout_address()
    
  }

  checkout_address(){
    return this.address.checkout_address().subscribe(data=>{this.address_details=data
      console.log(data)
    })
  }
  delivery(add,state,zip,city){
    let payload={
      add:add,
      state:state,
      zip:zip,
      city:city
    }
  }
  }


    



