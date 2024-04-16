import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  userName:any
  constructor(private blogservice:BlogServiceService) { }
  ngOnInit(): void {
    let userStore=localStorage.getItem('user');
    console.log(userStore);
    let userData=userStore&&JSON.parse(userStore);
    console.log(userData);
    this.userName=userData.username;
  }
  postBlog(data:any)
  {
    console.log(data.file);
    this.blogservice.addBlog(data);
  }

}
