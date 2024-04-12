import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyBlogComponent } from './show-my-blog.component';

describe('ShowMyBlogComponent', () => {
  let component: ShowMyBlogComponent;
  let fixture: ComponentFixture<ShowMyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
