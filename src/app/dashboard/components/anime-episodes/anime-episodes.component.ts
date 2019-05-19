import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../anime/model/anime';
import { AnimeService } from '../../../anime/services/anime.service';

@Component({
  selector: 'app-anime-episodes',
  templateUrl: './anime-episodes.component.html',
  styleUrls: ['./anime-episodes.component.scss']
})
export class AnimeEpisodesComponent implements OnInit {
  options: Object;
  episodes: Array<number> = [];
  bigAnimes: Anime[] = [];
  episodeCategories: any[] = [];
  constructor(public animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAnimes().subscribe(
      animes => { 

        this.bigAnimes = animes.filter((anime) => {
          return anime.episodes >= 100;   
        }).sort((a, b) => {
          return a.episodes - b.episodes;
        });

        this.bigAnimes.forEach((anime) => {
          this.episodeCategories.push(anime.name);
          this.episodes.push(anime.episodes);
        });

      },
      error => console.log("Error: ", error),
      () => {
        console.log("Histogram", this.episodes);
        this.options = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Most Anime Episodes'
          },
          xAxis :{
            categories: this.episodeCategories,
            crosshair: true                
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0,
              borderWidth: 0,
              groupPadding: 0,
              shadow: false
            }
          },
          series: [{
            name: 'Episodes',
            data: this.episodes
          }]
        };
      }  
    );    
  }

}
