import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../anime/model/anime';
import { AnimeService } from '../../../anime/services/anime.service';

@Component({
  selector: 'app-anime-ratings',
  templateUrl: './anime-ratings.component.html',
  styleUrls: ['./anime-ratings.component.scss']
})
export class AnimeRatingsComponent implements OnInit {
  options: Object;
  counts: Object = {};

  genresArray: Array<string> = [];
  animes: Anime[] = [];
  bigAnimes: Anime[] = [];
  episodeCategories: any[] = [];
  episodes: Array<number> = [];
  categories: any[] = [];
  ratings: any[] = [];
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
          this.counts[num] = (this.counts[num] || 0) + 1
        }
        console.log("genresArray", this.genresArray);

        this.animes = animes.filter((anime) => {
          return anime.popularity == 'High' && anime.episodes >= 40;   
        }).sort(() => {
          return .5 - Math.random();
        });

        this.bigAnimes = animes.filter((anime) => {
          return anime.episodes >= 100;   
        }).sort((a, b) => {
          return a.episodes - b.episodes;
        });

        this.bigAnimes.forEach((anime) => {
          this.episodeCategories.push(anime.name);
          this.episodes.push(anime.episodes);
        })

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
        console.log("Ratings", this.ratings);
        
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

      }
    );    
  }

}
