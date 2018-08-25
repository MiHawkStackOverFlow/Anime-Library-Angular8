import { Component, OnInit } from '@angular/core';
import { Anime } from '../../anime-list/anime';
import { myAnimeList } from '../mock-data/mock-animes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isLiked: boolean = false;
  allAnimes: Array<Anime> = myAnimeList;   
  
  constructor() { }

  ngOnInit() { }

  toggleLike(selectedAnime:Anime) : void {
    selectedAnime.isLiked = !selectedAnime.isLiked;
  }

}
