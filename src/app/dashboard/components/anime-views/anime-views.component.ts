import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../anime/model/anime';
import { AnimeService } from '../../../anime/services/anime.service';

@Component({
  selector: 'app-anime-views',
  templateUrl: './anime-views.component.html',
  styleUrls: ['./anime-views.component.scss']
})
export class AnimeViewsComponent implements OnInit {
  options: Object;
  constructor(public animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAnimes().subscribe(
      animes => { 
        // no data needed yet from service
      },
      error => console.log("Error: ", error),
      () => {
        console.log("Line chart");
        this.options = {
          // chart: {
          //   type: 'line'
          // },
          title: {
            text: 'Most Anime Views'
          },
          yAxis: {
            title: {
                text: 'Number of Views'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          plotOptions: {
            series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2013
            }
          },
          series: [{
            name: 'One Piece',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }, {
            name: 'Dragon Ball Super',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 50434]
          }, {
            name: 'Naruto Shippuden',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          }, {
            name: 'Detective Conan',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          }, {
            name: 'Attack on Titan',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }],
          responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
          }
        };  

      }
    );    
  }

}
