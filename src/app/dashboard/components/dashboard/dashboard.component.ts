import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  options: Object;
  
  constructor() {
    this.options = {
        title : { text : 'simple chart' },
        chart: { zoomType: 'x' },
        series: [{
            data: [11.5, 29.9, 71.5, 106.4, 129.2, 144.4, 196.8],
        }]
    };
  }

}
