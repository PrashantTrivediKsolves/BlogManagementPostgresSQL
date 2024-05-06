import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';
import { HttpClient } from '@angular/common/http';
import { BlogServiceService } from '../services/blog-service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-show-my-blog',
  templateUrl: './show-my-blog.component.html',
  styleUrls: ['./show-my-blog.component.css']
})
export class ShowMyBlogComponent implements OnInit {
  constructor(private signinservice:SignUpService,private http:HttpClient ,private blogService:BlogServiceService) { }
  blogList:any;
  localData:any;
  successMessage:string="Login SuccessFul";
  deleteSuccess:string='';
  // commentmessage:string='';
  ngOnInit(): void {
    // this.blogList=this.signinservice.myblogs
    // console.log('show-my-blogs',this.blogList);
    setTimeout(() => {
      this.successMessage=''
    },3000);
    this.myblogs();
  }
  myblogs()
  {
    let userStore=localStorage.getItem('user');
    console.log(userStore);
    let userData=userStore&&JSON.parse(userStore);
    console.log(userData);
    // this.http.get(`http://localhost:8001/blogsuser/${userData.username}`).subscribe((res)=>
    this.http.get(`${environment.url}/blogsuser/${userData.username}`).subscribe((res)=>
    {
      if(res)
        {
          this.blogList=res;
        }
    })
  }
  DeleteBlog(id: any): void {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.deleteBlog(id).subscribe(
        () => {
          console.log('Blog deleted successfully');
          this.deleteSuccess = 'Blog deleted successfully';
          this.myblogs();
          setTimeout(() => {
            this.deleteSuccess = '';
            // this.myblogs();
          }, 3000);
          // Refresh the blog list after deletion

        },
        (error) => {
          console.error('Error deleting blog:', error);
        }
      );
    }
  }

}
