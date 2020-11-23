import { Router } from '@angular/router';
import { SearchitemService } from './../searchitem.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.css']
})
export class SearchitemComponent implements OnInit {
  order_details:any[]=[]


  constructor(private order:SearchitemService,private router:Router){}
  ngOnInit(){
    this.placed_order()
    setTimeout(()=>{
      this.router.navigate(['home'])
    },7000)
  }

 
  placed_order(){
    return this.order.placed_order().toPromise().then( data=>{this.order_details=data
   
    })
  }
}
