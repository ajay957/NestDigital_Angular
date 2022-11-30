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
