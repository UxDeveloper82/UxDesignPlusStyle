import { Blog } from './../_models/blog';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  postUrl = 'http://localhost:5000/api/';
  blogs: Blog[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.postUrl + 'blogs');
  }

  getOne(id): Observable<Blog> {
    return this.http.get<Blog>(this.postUrl + 'blogs/' + id);
  }
}
