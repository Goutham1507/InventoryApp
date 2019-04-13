import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth:AuthService ,private router:Router ) { }

  ngOnInit() {
  }
  registerUser(event)
  {
    event.preventDefault();
    const errors=[]
    const target = event.target;
    const username =target.querySelector('#userName').value;
    const password =target.querySelector('#password').value;
    const cpassword =target.querySelector('#cpassword').value;
    
      if(password!=cpassword)
      {
          errors.push("password don't match")
      }

      if(errors.length===0)
      {
        this.Auth.registerUser(username,password).subscribe(data=>{
          console.log(data)
          if(data.success)
          {
            this.router.navigate(['dashboard'])
          }
        })
      }
      // {
      //   window.alert(data.message)
      // }
  
  }

}
