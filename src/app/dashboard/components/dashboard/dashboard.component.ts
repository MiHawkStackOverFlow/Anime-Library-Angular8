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
  options1: Object;
  animes: Anime[] = [];
  categories: any[] = [];
  ratings: any[] = [];
  genresArray: Array<string> = [];
  counts: Object = {};
  data: Array<any> = [];

  constructor(public animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAnimes().subscribe(
      animes => { 

        animes.forEach((anime) => {
          this.genresArray.push(anime.genre);
        });

        for (var i = 0; i < this.genresArray.length; i++) {
          var num = this.genresArray[i];
          this.counts[num] = this.counts[num] ? this.counts[num] + 1 : 1;
        }
        console.log("arey", this.genresArray);

        this.animes = animes.filter((anime) => {
          return anime.popularity == 'High' && anime.episodes >= 40;   
        }).sort(function() {
          return .5 - Math.random();
        });

        this.animes.forEach((anime) => {
          this.categories.push(anime.name);
          this.ratings.push(anime.rating);
        });  

        let genreSet = new Set(this.genresArray);
        console.log("Set", genreSet);
        this.genresArray = Array.from(genreSet);
        console.log("Now pie chart", this.genresArray);
        console.log("My count", this.counts[this.genresArray[7]]);
        
        this.genresArray.forEach((name) => {
          let obj = {};
          obj['name'] = name;
          obj['y'] = this.counts[name];
          this.data.push(obj);
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
            text: 'Popular Anime Ratings'
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
        console.log("My data", this.data);
        this.options1 = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'Popular Anime Genres'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          series: [{
              name: 'Genre',
              colorByPoint: true,
              data: this.data
          }]
        };
      }
    );  
  }

}
