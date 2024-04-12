import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(private servicelogin:SignUpService) { }

  ngOnInit(): void {
  }
  signin(dataval:any)
  {
    console.log(dataval);
    this.servicelogin.signinUser(dataval);
  }
}
