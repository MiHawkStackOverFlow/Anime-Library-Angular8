import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../anime/model/anime';
import { AnimeService } from '../../../anime/services/anime.service';

@Component({
  selector: 'app-anime-genres',
  templateUrl: './anime-genres.component.html',
  styleUrls: ['./anime-genres.component.scss']
})
export class AnimeGenresComponent implements OnInit {
  options: Object;
  counts: Object = {};
  data: Array<any> = [];
  genresArray: Array<string> = [];
  
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
        console.log("My data", this.data);
        this.options = {
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
