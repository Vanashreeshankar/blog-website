import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/model/posts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  posts = new Post();
  public id: string | null = '';
  data: any;
 

  constructor(private postService: PostsService, private formBuilder: FormBuilder, private rtr: ActivatedRoute) { }

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    auther: new FormControl('')
  })
  ngOnInit(): void {
    this.id = this.rtr.snapshot.paramMap.get('_id');
    
    console.log(this.id);

    this.getPostData();
  }
//for getting single id
  getPostData(){
    this.postService.updatePostData(this.id).subscribe(res =>{

      this.data = res;
      this.posts = this.data;
      this.form = new FormGroup({
        title: new FormControl(this.posts.title),
        description: new FormControl(this.posts.description),
        auther: new FormControl(this.posts.auther)
      })

    })
 
  }

  UpdatePost(){

    this.postService.updatePost(this.id, this.form.value).subscribe(res =>{
      this.data = res;
     
    })
  }

}
