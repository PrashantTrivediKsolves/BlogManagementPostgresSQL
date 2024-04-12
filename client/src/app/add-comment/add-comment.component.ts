import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';
import { CommentServiceService } from '../services/comment-service.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  BlogId:any;
  usernameval:any;
  constructor(private route:ActivatedRoute,private blogservice:BlogServiceService,private commentservice:CommentServiceService) { }
  ngOnInit(): void {
    let blogId=this.route.snapshot.paramMap.get('id');
    this.BlogId=blogId;
   // console.log(blogId);
    let userStore=localStorage.getItem('user');
    console.log(userStore);
    let userData=userStore&&JSON.parse(userStore);
    this.usernameval=userData.username;
    //console.log(userData);

  }
  addComment(data:any)
  {
    //console.log(data);
    this.commentservice.addCommentOnPost(data);
  }

}
