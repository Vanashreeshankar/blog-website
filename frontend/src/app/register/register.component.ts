import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  display=false;

  signupForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    name: new FormControl(null,[Validators.required]),
   
    password: new FormControl(null,[Validators.required]),
    cpass: new FormControl(null,[Validators.required]),
    que1: new FormControl(null,[Validators.required]),
    que2: new FormControl(null,[Validators.required])

  });

  constructor(private rtr:Router, private admin:AdminService) { }

  ngOnInit(): void {
  }
  
  toggle(){
    this.display = !this.display;
  }
  moveToSignIn(){
    this.rtr.navigate(['/login']);
  }

  signup(){
    if(!this.signupForm.valid || (this.signupForm.controls.password.value != this.signupForm.controls.cpass.value)){

      console.log('Invalid');
      return;
    }
    this.admin.signup(JSON.stringify(this.signupForm.value))
    .subscribe(
      data=> {console.log(data); this.rtr.navigate(['/login']);},
      error=>console.error(error)
    )
    //console.log(JSON.stringify(this.signupForm.value));
  }


}
