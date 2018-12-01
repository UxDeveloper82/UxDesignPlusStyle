import { Portfolio } from './../_models/portfolio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolioUrl = 'http://localhost:5000/api/';
  portfolios: Portfolio[];

constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.portfolioUrl + 'portfolios');
  }

  getPort(id): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.portfolioUrl + 'portfolios/' + id);
  }
}
