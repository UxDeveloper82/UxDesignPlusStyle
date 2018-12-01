import { Blog } from './../../_models/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../_services/blog.service';
import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(private alertify: AlertifyService, private blogService: BlogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.blog = data['blog'];
    });
  }

  // loadBlog() {
  //   this.blogService.getOne(+this.route.snapshot.params['id']).subscribe((blog: Blog) => {
  //     this.blog = blog;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
}
