import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {
  empid=""
  password=""

  constructor(private route:Router){}

  empValues=()=>{
    let data:any={"empid":this.empid,"password":this.password}
    if(this.empid=="1122" && this.password=="12345"){
      this.route.navigate(['/addcourse'])
    }
    else{
      alert("empid or password is wrong")
    }
  }

}
