import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  readValues=()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
  }

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
}
