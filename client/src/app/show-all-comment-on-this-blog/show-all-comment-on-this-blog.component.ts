import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from '../services/comment-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-all-comment-on-this-blog',
  templateUrl: './show-all-comment-on-this-blog.component.html',
  styleUrls: ['./show-all-comment-on-this-blog.component.css']
})
export class ShowAllCommentOnThisBlogComponent implements OnInit {
  AllCommentsWithUser:any;
  BlogId:any;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private commentService:CommentServiceService) { }
  ngOnInit(): void {
    let blogId=this.route.snapshot.paramMap.get('postId');
    this.BlogId=blogId;
    this.commentService.getAllCommentonPost(blogId).subscribe((res)=>
      {
        if(res)
          {
            this.AllCommentsWithUser=res;
          }
      })
    //console.log(userData);
  }
}
