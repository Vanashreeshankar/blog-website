import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-sdamin',
  templateUrl: './sdamin.component.html',
  styleUrls: ['./sdamin.component.css']
})
export class SdaminComponent implements OnInit {

  adminForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
    cpass: new FormControl(null,[Validators.required]),
   
  });

  constructor(private rtr:Router, private admin:AdminService) { }

  ngOnInit(): void {
  }

  sign(){
    if(!this.adminForm.valid || (this.adminForm.controls.password.value != this.adminForm.controls.cpass.value)){

      console.log('Invalid');
      return;
    }
    this.admin.sign(JSON.stringify(this.adminForm.value))
    .subscribe(
      data=> {console.log(data); this.rtr.navigate(['/bio']);},
      error=>console.error(error)
    )
    //console.log(JSON.stringify(this.signupForm.value));
  }

}
