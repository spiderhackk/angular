import { SignupService } from './../signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 myForm:FormGroup;

  constructor(private signupService:SignupService,private router:Router ) { }

  ngOnInit(): void {
    this.signup()
  }

  signup(){
    this.myForm=new FormGroup({
      email:new FormControl("",[Validators.required]),
      psw:new FormControl("",[Validators.required]),
      num:new FormControl("",[Validators.required]),
      username:new FormControl("",[Validators.required]),
      gender:new FormControl("",[Validators.required])
    })
  }

  onSubmit(){
    if (this.myForm.valid){
      this.signupService.signup(this.myForm.value).subscribe(responce=>{
        console.log(responce)
        window.alert("Successfully Registered")
        this.router.navigate([''])
      })

    }

  }
 


}
