import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  url='http://localhost:5000/posts';

  constructor(private http: HttpClient) { }

   addPost(data: any){
     return this.http.post(this.url, data);
   }

   getPostData(){
     return this.http.get<Post[]>(this.url);
   }

   updatePostData(_id: any){
    return this.http.get<Post[]>(this.url + `/${_id}`);
   }
   updatePost(_id: any, data: any){
    return this.http.put(this.url +`/${_id}`, data );
   }
   deletePostData(_id: any){
    return this.http.delete<Post[]>(this.url + `/${_id}`);
   }

   
}
