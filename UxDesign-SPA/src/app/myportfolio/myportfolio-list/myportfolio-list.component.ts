import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myportfolio-list',
  templateUrl: './myportfolio-list.component.html',
  styleUrls: ['./myportfolio-list.component.css']
})
export class MyportfolioListComponent implements OnInit {
  portfolios: any;

  constructor(private http: HttpClient) { }

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

