import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent {
  username=""
  password=""
  conpassword=""

  constructor(private route:Router){}

  empValues=()=>{
    let data:any={"username":this.username,"password":this.password,"conpassword":this.conpassword}
    if (this.password==this.conpassword){
      console.log(data)
      alert("registered successfully")
    }
    else{
      alert("password doesn't match")
      this.route.navigate(['/emplogin'])
    }
  }

}
