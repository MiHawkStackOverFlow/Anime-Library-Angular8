import { Component, OnInit } from '@angular/core';
import { myAnimeList } from './../shared/table/table.component';
import { Anime } from './../anime-list/anime';

@Component({
  selector: 'app-popular-anime',
  templateUrl: './popular-anime.component.html',
  styleUrls: ['./popular-anime.component.scss']
})
export class PopularAnimeComponent implements OnInit {
  popularAnime: Array<Anime> = myAnimeList; 

  constructor() { }

  ngOnInit() {
  }

}
