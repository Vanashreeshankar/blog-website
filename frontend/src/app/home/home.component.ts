import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  public blogPost: any =[];
  
  titleSearch: string = '';
  

  constructor(private postService: PostsService, private home: HomeService) { }

  ngOnInit(): void {
    this.getPostData();
  }

//Get Postlist from S_Admin
  getPostData(){
    
    this.home.getPost().subscribe(res => {
     // console.log(res);
      this.blogPost = res;
      //this.blogPost.push(res);
    })
  }
}


