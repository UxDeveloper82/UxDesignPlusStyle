import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: any;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.getPortfolio();
  }
   getPortfolio() {
     this.http.get('http://localhost:5000/api/portfolios')
         .subscribe(response => {
           this.portfolios = response;
         }, error => {
           console.log(error);
         });
   }
}
