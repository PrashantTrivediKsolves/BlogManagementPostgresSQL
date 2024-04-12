import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  BlogId:any;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    let blogId=this.route.snapshot.paramMap.get('postId');
    this.BlogId=blogId;
    console.log("hello");
    console.log("chaeck id",blogId);
    let userStore=localStorage.getItem('user');
    console.log(userStore);
    let userData=userStore&&JSON.parse(userStore);
    //console.log(userData);
  }
  addCommentOnPost(commentuser:any)
  {
    this.http.post("http://localhost:8001/comments",commentuser,{observe:'response'}).subscribe((res)=>
      {
        if(res){
          console.log(res);
          this.router.navigate(["All-blog"]);
        }
      })
  }
  getAllCommentonPost(id:any)
  {
    return this.http.get(`http://localhost:8001/comments/${id}`)
  }


}
