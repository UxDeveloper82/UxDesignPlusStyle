import { AlertifyService } from '../_services/alertify.service';
import { PortfolioService } from '../_services/portfolio.service';
import { Portfolio } from '../_models/portfolio';
import {Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PortfolioDetailResolver implements Resolve<Portfolio> {

    constructor(private portfolioService: PortfolioService,
        private router: Router, private alertify: AlertifyService) {}

     resolve(route: ActivatedRouteSnapshot): Observable<Portfolio> {
         return this.portfolioService.getPort(route.params['id']).pipe(
             catchError(error => {
                 this.alertify.error('Problem retrieving your data');
                 this.router.navigate(['/portfolio']);
                 return of(null);
             })
         );
     }
}

