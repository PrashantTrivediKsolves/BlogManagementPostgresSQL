import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  message:string="";
  constructor(private http:HttpClient,private router:Router) { }
  addBlog(data:any)
  {
    this.http.post("http://localhost:8001/blogs",data,{observe:'response'}).subscribe((res)=>
  {
    if(res){
      console.log(res);
      this.message="Blog created successfully";
      this.router.navigate(["All-blog"]);
    }
  })
  }
  getBlog()
  {
    return this.http.get('http://localhost:8001/blogs');
  }
  updateBlog(data:any)
  {
    return this.http.put(`http://localhost:8001/blogs/${data.id}`,data);
  }
  deleteBlog(id:any)
  {
    return this.http.delete(`http://localhost:8001/blogs/${id}`);
  }
  getBlogbyid(id:any)
  {
    return this.http.get(`http://localhost:8001/blogs/${id}`);
  }
}
