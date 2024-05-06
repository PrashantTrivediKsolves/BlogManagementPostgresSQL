import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter(false)
  checkLogin=false;
  myblogs:any;
  constructor(private http:HttpClient,private router:Router) { }
  signUpUser(data:any)
  {
    // this.http.post("http://localhost:8001/signup", data,{observe:'response'}).subscribe((res)=>
      this.http.post(environment.signupUrl, data,{observe:'response'}).subscribe((res)=>
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
    const url = environment.signnUrl;
    const body = {
      email: data.email,
      password: data.password,
    };
    console.log(body);
    this.http.post(url, body).subscribe(
      (res: any) => {
        console.log(res);
        if(res)
        {
          this.isLoginError.emit(false);
          localStorage.setItem('user', JSON.stringify(res)); // Assuming server response contains user data
          this.router.navigate(['my-blog']);
        }
      },
      (error) => {
        console.log('Login failed:', error);
        this.isLoginError.emit(true);
        // Handle login error (e.g., display error message)
      }
    );
  }
}

