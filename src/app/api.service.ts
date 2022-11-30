import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchCourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  fetchFriend=()=>{
    return this.http.get("https://dummyapifriends.herokuapp.com/adddata")
  }

  addCourse=(dataToSend:any)=>{
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/getcourses",dataToSend)
  }
  addFriend=(dataToSend:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }
}
