import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username=""
  password=""

  constructor(private route:Router){}

  adminValues=()=>{
    let data:any={"username":this.username,"password":this.password}
    if(this.username=="admin" && this.password=="12345"){
      this.route.navigate(['/viewcourse'])
    }
    else{
      alert("username or password is wrong")
    }
  }
}
