import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { PostsService } from 'src/app/service/posts.service';

import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {



  
  
//blogPost : Post[] = [];
blogPost: any;
  name: String = '';
  data: any;
 
  

  total: number = 0;
 
  constructor(private rtr: Router, private admin: AdminService, private art: FormBuilder, private postService: PostsService, private home: HomeService) {




    this.admin.profile()
    .subscribe(
      data => this.addName(data),
      _error=> this.rtr.navigate(['/login'])
    )
      
    
   }
   addName(data: any){
     this.name = data.name;
     
   }
  
  
  ngOnInit(): void {
    //this.blogPost.push(new Post('P1', 'descr','auth'))
    //this.blogPost.push(new Post('P1', 'descr','auth'))
    
    this.getPostData();

  }
  getPostData(){
    this.postService.getPostData().subscribe(res => {
      console.log(res);
      this.blogPost = res;

      this.blogPost.forEach((a: any) => {
        Object.assign(a,{quantity: 1});
        
      });
    })
  }

  DeletePost(id: any){
    this.postService.deletePostData(id).subscribe(res => {
      alert('Are you sure???');
      this.data = res;
     
     
    });
  }
 
 storePost(){
  this.home.getPost().subscribe(res => {
    this.total = res.length;
  })
 }
 
  


  }


