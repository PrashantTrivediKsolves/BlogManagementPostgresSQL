import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';
import { HttpClient } from '@angular/common/http';
import { BlogServiceService } from '../services/blog-service.service';
@Component({
  selector: 'app-show-my-blog',
  templateUrl: './show-my-blog.component.html',
  styleUrls: ['./show-my-blog.component.css']
})
export class ShowMyBlogComponent implements OnInit {
  constructor(private signinservice:SignUpService,private http:HttpClient ,private blogService:BlogServiceService) { }
  blogList:any;
  localData:any;
  ngOnInit(): void {
    // this.blogList=this.signinservice.myblogs
    // console.log('show-my-blogs',this.blogList);
    this.myblogs();
  }
  myblogs()
  {
    let userStore=localStorage.getItem('user');
    console.log(userStore);
    let userData=userStore&&JSON.parse(userStore);
    console.log(userData);
    this.http.get(`http://localhost:8001/blogsuser/${userData.username}`).subscribe((res)=>
    {
      if(res)
        {
          this.blogList=res;
        }
    })
  }
  DeleteBlog(id: any): void {
    this.blogService.deleteBlog(id).subscribe(
      () => {
        console.log('Blog deleted successfully');
        // Refresh the blog list after deletion
        this.myblogs();
      },
      (error) => {
        console.error('Error deleting blog:', error);
      }
    );
  }
}
