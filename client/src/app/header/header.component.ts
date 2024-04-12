import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SignUpService } from '../services/sign-up.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType:string="default";
  userName:string="prashant Trivedi";
  constructor(private route:Router,private logservice:SignUpService) { }
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>
      {
        if(val.url)
        {
          console.log(val.url);
          if(localStorage.getItem('user')&&val.url.includes('/home'))
          {
            console.log("this is user area ji");
            let userStore=localStorage.getItem('user');
            console.log(userStore);
            let userData=userStore&&JSON.parse(userStore);
            console.log(userData);
            this.userName=userData.username;
            this.userType="user";
          }
          else
          {
            console.log("out side the user area ji");
            // this.userType="default";
          }
        }
        else{
          if(localStorage.getItem('user'))
            {
            let userStore=localStorage.getItem('user');
            console.log(userStore);
            let userData=userStore&&JSON.parse(userStore);
            console.log(userData);
            this.userName=userData.username;
            this.userType="user";
            }
        }
      })

  }
  logout()
  {
    localStorage.removeItem('user');
    this.userType="default";
    this.logservice.checkLogin=false
    this.route.navigate(["signin"]);

  }
}
