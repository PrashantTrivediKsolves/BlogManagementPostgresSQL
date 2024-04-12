import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogservice:BlogServiceService) { }
  ngOnInit(): void {
  }
  postBlog(data:any)
  {
    console.log(data.file);
    this.blogservice.addBlog(data);
  }

}
