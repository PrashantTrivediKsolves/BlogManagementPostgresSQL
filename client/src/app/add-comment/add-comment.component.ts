import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  BlogId:any;
  constructor(private route:ActivatedRoute,private blogservice:BlogServiceService) { }
  ngOnInit(): void {
    let blogId=this.route.snapshot.paramMap.get('id');
    this.BlogId=blogId;
    console.log(blogId);
  }
  addComment(data:any)
  {
    console.log(data);
  }

}
