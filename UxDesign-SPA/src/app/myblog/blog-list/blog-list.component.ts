import { ActivatedRoute } from '@angular/router';
import { Blog } from './../../_models/blog';
import { AlertifyService } from './../../_services/alertify.service';
import { BlogService } from './../../_services/blog.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor(private http: HttpClient, private blogService: BlogService,
    private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
       this.blogs = data['blogs'];
    });
  }

  // allPosts() {
  //   this.blogService.getAll().subscribe((blogs: Blog[]) => {
  //     this.blogs = blogs;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  //  }

}
