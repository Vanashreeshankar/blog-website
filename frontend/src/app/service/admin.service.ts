import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url='http://127.0.0.1:5000/admins'

  constructor(private http:HttpClient, private rtr: Router) { }

  signup(body:any){
    return this.http.post(this.url + '/register', body,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
  login(body:any){
    return this.http.post(this.url +'/login', body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
  
  

  profile(){
    return this.http.get(this.url +'/admin',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  logout(){
    return this.http.get(this.url +'/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
//For S_admin
  sign(body:any){
    return this.http.post(this.url+'/register', body,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

}

