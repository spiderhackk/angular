import { LoginService } from './../login.service';
import { RouterModule ,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message:any[]=[];
  get_message:string;
  myForm:FormGroup;
  user_details:any[]=[]
  username:any;
  constructor(private service:LoginService,private router:Router) { }
  ngOnInit(){
    this.login();
  }

  login(){
    this.myForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      psw:new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    if (this.myForm.valid)
    this.service.login(this.myForm.value).subscribe(responce =>{this.message=responce
      let get_token=responce[1]
       this.get_message=responce[0]
      let get_status_code=responce[2]
      if (get_status_code=="201"){
        localStorage.setItem("token",get_token)
      return this.router.navigate(['home'])
      }
      else{
        this.get_message==responce[2]
        return this.router.navigate([''])

      }
    })
  }
    }
  


