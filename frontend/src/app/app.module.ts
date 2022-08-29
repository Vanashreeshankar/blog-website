import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';



import { RoutingComponents } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { CreateComponent } from './profile/create/create.component';
import { BioComponent } from './profile/bio/bio.component';
import { PostsComponent } from './profile/posts/posts.component';


import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from './service/posts.service';


import { SdaminComponent } from './sdamin/sdamin.component';
import { EditComponent } from './profile/edit/edit.component';
import { TruncatePipe } from './truncate.pipe';
import { SearchPipe } from './search.pipe';
import { HomeService } from './service/home.service';




@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    RoutingComponents,
    CreateComponent,
    BioComponent,
    PostsComponent,
    SdaminComponent,
    EditComponent,
    TruncatePipe,
    SearchPipe,
        
         
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminService, PostsService,HomeService, TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
