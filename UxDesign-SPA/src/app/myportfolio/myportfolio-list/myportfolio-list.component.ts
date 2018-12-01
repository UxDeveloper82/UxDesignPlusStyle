import { Portfolio } from './../../_models/portfolio';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myportfolio-list',
  templateUrl: './myportfolio-list.component.html',
  styleUrls: ['./myportfolio-list.component.css']
})
export class MyportfolioListComponent implements OnInit {
  portfolios: Portfolio[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
       this.portfolios = data['portfolios'];
    });
  }
  // getPortfolio() {
  //   this.http.get('http://localhost:5000/api/portfolios')
  //       .subscribe(response => {
  //         this.portfolios = response;
  //       }, error => {
  //         console.log(error);
  //       });
  // }

}

