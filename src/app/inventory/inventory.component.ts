import { InventoryServiceService } from './../inventory-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inGroup:FormGroup;
  message:string
  store:any[]=[]

  constructor(private inservice:InventoryServiceService,private router:Router) { }

  ngOnInit(): void {
    this.insub()
   
  }
  insub(){
    this.inGroup=new FormGroup({
      ProductsModel:new FormControl('',),
      ProductsName:new FormControl(''),
      ProductsStock:new FormControl(''),
      ProductsPrice:new FormControl('')
    })
  }
  onsubmit(){
    if(this.inGroup.valid){
      this.inservice.insub(this.inGroup.value).subscribe(responce =>{this.store=responce
        this.message=responce[0]
        let status=responce[1]
        if (status=="201"){
          return this.router.navigate(['home'])
        }
        else{
          return "Failed to update inventory"
        }
      })
    }

  }

  }