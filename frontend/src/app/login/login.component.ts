import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display=false;
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
    que1: new FormControl(null,[Validators.required]),
    que2: new FormControl(null,[Validators.required])
  });

  constructor(private rtr:Router, private admin:AdminService) { }

  ngOnInit(): void {
  }
//To display the questions
  toggle(){
    this.display = !this.display;
  }

  moveToSignup(){
    this.rtr.navigate(['/register']);
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }
    this.admin.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data => {console.log(data); this.rtr.navigate(['/bio']);},
      error=>console.error(error)

    )
      console.log(JSON.stringify(this.loginForm.value));
    
  }
  

}
