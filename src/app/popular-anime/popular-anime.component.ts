import { Component, OnInit } from '@angular/core';
import { myAnimeList } from './../shared/table/table.component';
import { Anime } from './../anime-list/anime';

@Component({
  selector: 'app-popular-anime',
  templateUrl: './popular-anime.component.html',
  styleUrls: ['./popular-anime.component.scss']
})
export class PopularAnimeComponent implements OnInit {
  popularAnimes: Array<Anime> = myAnimeList; 

  constructor() { }

  ngOnInit() {
    // sort anime using rating values
    let sortedArray = this.popularAnimes.sort((anime1: Anime, anime2:Anime) => {
      return anime2.rating - anime1.rating;
    });
    // show first 12 popular animes based on rating
    this.popularAnimes = sortedArray.slice(0, 12);
  }

}
