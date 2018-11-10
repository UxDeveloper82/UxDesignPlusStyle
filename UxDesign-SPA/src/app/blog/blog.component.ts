import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any;

  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.Http.get('http://localhost:5000/api/blogs')
       .subscribe(response => {
          this.blogs = response;
       }, error => {
         console.log(error);
       });
  }

}
