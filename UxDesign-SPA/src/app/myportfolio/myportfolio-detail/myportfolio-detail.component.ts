import { Portfolio } from './../../_models/portfolio';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myportfolio-detail',
  templateUrl: './myportfolio-detail.component.html',
  styleUrls: ['./myportfolio-detail.component.css']
})
export class MyportfolioDetailComponent implements OnInit {
   portfolio: Portfolio;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.portfolio = data['portfolio'];
    });
  }
  // getPortfolio(id) {
  //   this.http.get('http://localhost:5000/api/portfolios/' + this.route.params['id'])
  //       .subscribe(response => {
  //         this.portfolios = response;
  //       }, error => {
  //         console.log(error);
  //       });
  // }


}
