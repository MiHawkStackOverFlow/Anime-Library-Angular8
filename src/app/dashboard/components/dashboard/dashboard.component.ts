import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../anime/model/anime';
import { AnimeService } from '../../../anime/services/anime.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: Object;
  animes: Anime[] = [];
  categories: any[] = [];
  ratings: any[] = [];

  constructor(public animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAnimes().subscribe(
      animes => { 
        this.animes = animes.sort((a, b) => b.rating - a.rating).slice(0, 10).reverse(); 
        this.animes.forEach((anime) => {
          this.categories.push(anime.name);
          this.ratings.push(anime.rating);    
        });
      },
      error => console.log("Error: ", error),
      () => {
        console.log("Test", this.ratings);
        this.options = {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Anime Popularity'
          },
          xAxis: {
            title: {
              text: 'Top Anime Names'
            },
            categories: this.categories
          },
          yAxis: {
            title: {
              text: 'Ratings'
            }
          },
          series: [{
            data: this.ratings
          }]
        };
      }
    );  
  }

}
