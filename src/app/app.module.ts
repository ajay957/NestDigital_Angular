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
    path:"course",
    component:ViewCourseComponent
  },
  {
    path:"friend",
    component:ViewFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    AdminComponent,
    AdminNavbarComponent,
    ViewCourseComponent,
    ViewFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
