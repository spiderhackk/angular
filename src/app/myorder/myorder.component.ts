import { MyorderService } from './../myorder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  images=localStorage.getItem('path')
  all_images:any[]=[]

  Order_history:any[]=[]
  constructor(private orderService:MyorderService) { 
    
  }

  ngOnInit(): void {
    this.order_history()
  }

  order_history(){
    return this.orderService.order_history().subscribe(responce=>{this.Order_history=responce    
      this.all_images.push(this.images)
    })
  }

  remove(orderid){
    let payload={
      orderid:orderid
    }
    return this.orderService.remove(payload).subscribe(responce=>{
      window.alert(responce)
     window.location.reload()
    })
  }



}
