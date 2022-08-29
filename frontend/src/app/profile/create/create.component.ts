import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;
 
  constructor(private postService: PostsService, private formBuilder: FormBuilder, private rtr: Router) { }

  createForm(){
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      auther: ['',Validators.required],
      
      
    })
  }
  ngOnInit(): void {
    this.createForm();
  }
  
  postData(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    this.postService.addPost(this.form.value).subscribe(res => {
      this.data = res;
      this.rtr.navigate(['/bio']);
    })
  
  }

} 