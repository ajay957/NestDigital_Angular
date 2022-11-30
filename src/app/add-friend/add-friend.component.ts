import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  image=""
  name=""
  friendName=""
  DescribeYourFriend=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"image":this.image,"name":this.name,"friendName":this.friendName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          alert("friend added successfully")
          this.name=""
          this.friendName=""
          this.DescribeYourFriend=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }

}
