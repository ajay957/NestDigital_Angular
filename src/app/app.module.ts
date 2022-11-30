import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebPageComponent } from './web-page/web-page.component';
import { AdminComponent } from './admin/admin.component';

const myRoute:Routes=[
  {
    path:"",
    component:WebPageComponent
  },
  {
    path:"adminlogin",
    component:AdminComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
