import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { PostsService } from 'src/app/service/posts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from 'src/app/model/posts';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { TruncatePipe } from 'src/app/truncate.pipe';





@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  //Event emitter for post to bio component
  @Input()
  post!: Post;
  fullDescription!: string; 

  blogPost: any;

  public id: string | null = '';
  data: any;

  public postList: any;
 
 
  
  
  
  constructor(private postService: PostsService,  private rtr: ActivatedRoute, private home:HomeService, private pipe: TruncatePipe){}
  ngOnInit(): void {

    this.fullDescription = this.post.description;
    this.post.description = this.pipe.transform(this.post.description, [250]);
    
  
  }
  
  show(){
     this.post.description = this.fullDescription;
  }

  DeletePost(id: any){
    this.postService.deletePostData(id).subscribe(res => {
      alert('Are you sure???');
      this.data = res;
     
     
    });
 
  }
  addTohome(post:any){
   
      this.home.addToHome(post);
      /*this.postService.getPostData().subscribe(res => {
        console.log(res);
        this.blogPost = res;
      })*/
      
    
    //this.postService.blogPost = this.blogPost;
    //this.rtr.navigate(['/home']);
    /*this.postService.getPostById(post).subscribe(res =>{
      this.data = res;
      this.post = this.data;*/
      
   
    // console.log(post.target._id);
      
  //})
  //this.postService.getPostToHome(post);
  //this.postAdded.emit(post);
  //this.postService.getPostToHome(id);
 
}
}
