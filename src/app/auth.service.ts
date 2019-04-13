import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { JsonPipe } from '@angular/common';
interface myData{
  success:boolean,
  message:string
}
interface registerResponse{
  success:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus =false;
  constructor(private http:HttpClient) { }
  setLoggedIn(value:boolean)
  {
    this.loggedInStatus=value
    
  } 
  get isloggedIn()
  {
    
    return this.loggedInStatus
  }

  registerUser(username,password)
  {
    return this.http.post<registerResponse>('/api/register',{
      username,
      password
    
    })
  }

  getUserDetails(username,password){

    return this.http.post<myData>('/api/auth.php',{
      username,password

    })
  }
}
