import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public homePostList : any = [];
  public postList = new BehaviorSubject<any>([]);

  constructor() { }

  getPost(){
    return this.postList.asObservable();
  }
  setPost(post: any){
    this.homePostList.push(...post);
    this.postList.next(post);
  }
  addToHome(post: any){
    this.homePostList.push(post);
    this.postList.next(post);
    console.log(this.homePostList);
    this.getTotal();
  }
  getTotal(): number{
    let postTotal = 0;
    this.homePostList.map((a:any) => {
      postTotal += a.total;
    })
    return postTotal;
  }
} 
