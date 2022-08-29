import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './profile/posts/posts.component';
import { CreateComponent } from './profile/create/create.component';

import { BioComponent } from './profile/bio/bio.component';
import { EditComponent } from './profile/edit/edit.component';

import { SdaminComponent } from './sdamin/sdamin.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
 
  
  {path:'',component: SiteLayoutComponent,
  children:[
   {path:'login', component:LoginComponent} ,
   {path:'register', component:RegisterComponent},
    {path:'sadmin', component: SdaminComponent},
    {path:'home', component:HomeComponent},
    {path:'home/:_id', component:HomeComponent},
    {path:'posts', component:PostsComponent},
    {path:'create', component:CreateComponent},
    {path:'bio',  component:BioComponent},
    {path: 'edit/:_id', component: EditComponent}
    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [LoginComponent,RegisterComponent,HomeComponent,PostsComponent,CreateComponent,BioComponent,EditComponent];
