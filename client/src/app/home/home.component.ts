import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check=false
  constructor(private logservice:SignUpService) { }

  ngOnInit(): void {
    this.check=this.logservice.checkLogin;
  }

}
