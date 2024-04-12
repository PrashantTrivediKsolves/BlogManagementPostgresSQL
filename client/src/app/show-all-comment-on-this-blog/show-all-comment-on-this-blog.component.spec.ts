import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCommentOnThisBlogComponent } from './show-all-comment-on-this-blog.component';

describe('ShowAllCommentOnThisBlogComponent', () => {
  let component: ShowAllCommentOnThisBlogComponent;
  let fixture: ComponentFixture<ShowAllCommentOnThisBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllCommentOnThisBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCommentOnThisBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
