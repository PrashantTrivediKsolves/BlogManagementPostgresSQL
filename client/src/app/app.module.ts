import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ShowMyBlogComponent } from './show-my-blog/show-my-blog.component';
import { ShowAllCommentOnThisBlogComponent } from './show-all-comment-on-this-blog/show-all-comment-on-this-blog.component';
import { FourzerofourComponent } from './fourzerofour/fourzerofour.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    SigninComponent,
    HomeComponent,
    BlogComponent,
    ShowBlogComponent,
    UpdateBlogComponent,
    AddCommentComponent,
    ShowMyBlogComponent,
    ShowAllCommentOnThisBlogComponent,
    FourzerofourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
