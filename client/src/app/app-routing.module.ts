import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { BlogComponent } from './blog/blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ShowMyBlogComponent } from './show-my-blog/show-my-blog.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ShowAllCommentOnThisBlogComponent } from './show-all-comment-on-this-blog/show-all-comment-on-this-blog.component';

const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"addblog",
    component:BlogComponent
  },
  {
    path:"All-blog",
    component:ShowBlogComponent
  },
  {
    path:"update-blog/:id",
    component:UpdateBlogComponent
  },
  {
    path:"my-blog",
    component:ShowMyBlogComponent
  },
  {
    path:"add-comment/:id",
    component:AddCommentComponent
  },
  {
    path:"show-comments/:postId",
    component:ShowAllCommentOnThisBlogComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
