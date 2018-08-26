import { Component, OnInit } from '@angular/core';
import { myAnimeList } from '../shared/mock-data/mock-animes';
import { Anime } from '../shared/interfaces/anime';

@Component({
  selector: 'app-popular-anime',
  templateUrl: './popular-anime.component.html',
  styleUrls: ['./popular-anime.component.scss']
})
export class PopularAnimeComponent implements OnInit {
  popularAnimes: Array<Anime> = myAnimeList;
  popularAnimeHeading: string = 'Popular Anime Series'; 

  constructor() { }

  sortAnime(animeList: Array<Anime>) {
    // sort anime using rating values
    let sortedArray = animeList.sort((anime1: Anime, anime2:Anime) => {
      return anime2.rating - anime1.rating;
    });
    return sortedArray;
  }

  sliceAnime(animeList: Array<Anime>, start: number, end: number) {
    return this.sortAnime(animeList).slice(start, end);
  }

  ngOnInit() {
    // show first 12 popular animes based on rating
    this.popularAnimes = this.sliceAnime(this.popularAnimes, 0, 12);
  }

  toggleLike(selectedAnime:Anime) : void {
    selectedAnime.isLiked = !selectedAnime.isLiked;
  }

}
