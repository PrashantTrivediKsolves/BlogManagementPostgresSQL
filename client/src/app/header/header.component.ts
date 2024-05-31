import {  OnInit } from '@angular/core';
import { Component, HostListener , ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  @ViewChild('navLinks') navLinks!: ElementRef<HTMLDivElement>;
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
      this.route.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          // Reset text color when navigation starts
          this.resetTextColor();
          this.resetTextColor1();
        }
      });
  }
  logout()
  {
    localStorage.removeItem('user');
    this.userType="default";
    this.logservice.isLoginError.emit(false);
    this.logservice.checkLogin=false
    this.route.navigate(["signin"]);
  }
  changeTextColor(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    targetElement.style.color = 'red'; // Change the text color to red on click
  }
  resetTextColor(): void {
    const anchorElement = document.querySelector('.navbar-brand') as HTMLElement;
    if (anchorElement) {
      anchorElement.style.color = ''; // Reset text color to default (empty string)
    }
  }
  resetTextColor1(): void {
    const anchorElements = document.querySelectorAll('.nav-link') as NodeListOf<HTMLElement>;

    // Loop through each anchor element
    anchorElements.forEach(element => {
      element.style.color = ''; // Reset text color to default (empty string)
    });
  }

}
