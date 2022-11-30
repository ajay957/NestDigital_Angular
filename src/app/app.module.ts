import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebPageComponent } from './web-page/web-page.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegComponent } from './emp-reg/emp-reg.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:WebPageComponent
  },
  {
    path:"adminlogin",
    component:AdminComponent
  },
  {
    path:"viewcourse",
    component:ViewCourseComponent
  },
  {
    path:"friend",
    component:ViewFriendComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  },
  {
    path:"emplogin",
    component:EmpLoginComponent
  },
  {
    path:"empreg",
    component:EmpRegComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    AdminComponent,
    AdminNavbarComponent,
    ViewCourseComponent,
    ViewFriendComponent,
    AddCourseComponent,
    AddFriendComponent,
    EmpLoginComponent,
    EmpRegComponent,
    EmpNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
