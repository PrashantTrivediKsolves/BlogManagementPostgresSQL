import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  BlogList:any
  blogMessage:any
  constructor(private blogService:BlogServiceService) { }
  ngOnInit(): void {
    this.loadBlogList();
    this.blogMessage=this.blogService.message;
    setTimeout(()=>{
      this.blogMessage='';
    },3000)
  }
  loadBlogList(): void {
    this.blogService.getBlog().subscribe(
      (res) => {
        this.BlogList = res;
      },
      (error) => {
        console.error('Error fetching blog list:', error);
      }
    );
  }
  // DeleteBlog(id: any): void {
  //   this.blogService.deleteBlog(id).subscribe(
  //     () => {
  //       console.log('Blog deleted successfully');
  //       this.blogMessage = 'Blog deleted successfully';
  //       // Refresh the blog list after deletion
  //       this.loadBlogList();
  //     },
  //     (error) => {
  //       console.error('Error deleting blog:', error);
  //       this.blogMessage = 'Error deleting blog';
  //     }
  //   );
  // }
  calculateCardDimensions(blogContent: string): { width: string, height: string } {
    const contentLength = blogContent.length;
    let width = '400px'; // Default width
    let height = '300px'; // Default height

    // Adjust dimensions based on content length
    if (contentLength > 200) {
      width = '300px'; // Decrease width for longer content
      height = '400px'; // Increase height for longer content
    }

    return { width, height };
  }
}
