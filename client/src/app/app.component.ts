import { Component } from '@angular/core';
import { BlogServiceService } from './services/blog-service.service';
import { SignUpService } from './services/sign-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  status:any;
  constructor(private servicebhai:SignUpService){}
  ngOnInit(): void {
    this.status=this.servicebhai.checkLogin;
  }
}
