import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  blogData:any
  blgMessage:undefined|string;
  constructor(private route:ActivatedRoute,private blogservice:BlogServiceService,private router1:Router) { }

  ngOnInit(): void {
    let blogId=this.route.snapshot.paramMap.get('id');
    console.log(blogId);
    blogId&&this.blogservice.getBlogbyid(blogId).subscribe((data)=>
    {
      console.log(data);
      this.blogData=data;
    })
  }
  updateBlog(data:any)
  {
     if(this.blogData)
      {
        data.id=this.blogData.id;
      }
      this.blogservice.updateBlog(data).subscribe((res)=>
      {
        if(res)
          {
            this.blgMessage="blog has updated"
            this.router1.navigate(['my-blog']);

          }
      })
      setTimeout(()=>
      {
        this.blgMessage=undefined

      },3000)
    }
}
