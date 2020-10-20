import { SearchServiceService } from './../search-service.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items=[]
  private refresh:Subscription
  constructor(private search:SearchServiceService) { }

  ngOnInit(): void {
    this.displayCart()
  }

  displayCart(){
    return this.search.displayCart().subscribe(responce=>{this.items=responce
      console.log(this.items)
    })
  }

  remove(ProductsId){
    let payload={
      ProductsId:ProductsId
    }
    return this.search.remove(payload).subscribe(data=>{
      window.alert(data)
    })
  }



}
