import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor(private rtr: Router, private admin:AdminService ) { }

  ngOnInit(): void {
  }
//admin logout function
  logout(){
    this.admin.logout()
    .subscribe(
      data => {console.log(data); this.rtr.navigate(['/login']) },
      error => console.error(error)
    )
    
  }

}
