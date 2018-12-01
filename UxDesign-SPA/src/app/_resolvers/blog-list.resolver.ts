import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Injectable } from '@angular/core';

@Injectable()
export class BlogListResolver implements Resolve<Blog[]> {
    constructor(private blogService: BlogService,
        private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Blog[]> {
        return this.blogService.getAll().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}

