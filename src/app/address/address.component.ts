import { AddressService } from './../address.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  myForm:FormGroup;

  constructor(private service:AddressService,private router:Router) { }
 

  ngOnInit(): void {
    this.addAddress()
  }
  addAddress(){
    this.myForm=new FormGroup({
      firstname:new FormControl("",[Validators.required]),
      street:new FormControl("",[Validators.required]),
      zip:new FormControl("",[Validators.required]),
      state:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      city:new FormControl("",[Validators.required]),
      gender:new FormControl("",[Validators.required])
    })
  }
  onSubmit(){
    if (this.myForm.valid){
      this.service.addAddress(this.myForm.value).subscribe(responce=>{
        console.log(responce)
        window.alert("Added Successfully ")
        this.router.navigate(['/address'])
      })

    }
  }}

