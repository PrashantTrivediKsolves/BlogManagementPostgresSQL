import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter(false)
  checkLogin=false;
  myblogs:any;
  constructor(private http:HttpClient,private router:Router) { }
  signUpUser(data:any)
  {
    this.http.post("http://localhost:8001/signup", data,{observe:'response'}).subscribe((res)=>
    {
      if(res)
        {
          console.log(res);
          this.router.navigate(['signin']);
        }
    });
  }
  signinUser(data:any)
  {
    console.log("helllo");
    const url = 'http://localhost:8001/login';
    const body = {
      username: data.username,
      password: data.password
    };
    console.log(body);
    this.http.post(url, body).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res)); // Assuming server response contains user data
        this.checkLogin=true;
        this.router.navigate(['my-blog']);
      },
      (error) => {
        console.log('Login failed:', error);
        // Handle login error (e.g., display error message)
      }
    );
  }
}

