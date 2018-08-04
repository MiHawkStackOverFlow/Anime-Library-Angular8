import { Component, OnInit } from '@angular/core';
import { Anime } from '../../anime-list/anime';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isLiked: boolean = false;

  myAnimeList: Array<Anime> = [
    { name: "Angel Beats",         episodes: 13,  genre: "Drama",       rating: 7.8, popularity: "Low",      isLiked: false },
    { name: "Attack On Titan",     episodes: 40,  genre: "Apocalyptic", rating: 8.7, popularity: "High",     isLiked: false },
    { name: "Clannad",             episodes: 24,  genre: "Fantasy",     rating: 7.5, popularity: "Low",      isLiked: false },
    { name: "Code Geass",          episodes: 50,  genre: "Mecha",       rating: 9.8, popularity: "High",     isLiked: false },
    { name: "Cowboy Bebop",        episodes: 26,  genre: "Space",       rating: 7.9, popularity: "Moderate", isLiked: false },
    { name: "Death Note",          episodes: 37,  genre: "Crime",       rating: 9.0, popularity: "High",     isLiked: false },    
    { name: "Detective Conan",     episodes: 950, genre: "Mystery",     rating: 8.4, popularity: "High",     isLiked: false },
    { name: "Dragon Ball Super",   episodes: 125, genre: "Adventure",   rating: 9.1, popularity: "High",     isLiked: false },
    { name: "Ergo Proxy",          episodes: 23,  genre: "Science",     rating: 8.1, popularity: "Low",      isLiked: false },
    { name: "Fate Stay Night",     episodes: 23,  genre: "Action",      rating: 7.6, popularity: "Moderate", isLiked: false }, 
    { name: "Flame Of Recca",      episodes: 42,  genre: "Adventure",   rating: 7.9, popularity: "Moderate", isLiked: false },    
    { name: "Fruits Basket",       episodes: 26,  genre: "Romance",     rating: 7.7, popularity: "Moderate", isLiked: false },
    { name: "Fullmetal Alchemist", episodes: 64,  genre: "Action",      rating: 9.2, popularity: "High",     isLiked: false },
    { name: "HunterxHunter",       episodes: 148, genre: "Adventure",   rating: 8.9, popularity: "High",     isLiked: false },
    { name: "Naruto Shippuden",    episodes: 500, genre: "Action",      rating: 9.5, popularity: "High",     isLiked: false },
    { name: "One Piece",           episodes: 850, genre: "Adventure",   rating: 9.7, popularity: "High",     isLiked: false },
    { name: "PokeMon",             episodes: 659, genre: "Adventure",   rating: 7.7, popularity: "Moderate", isLiked: false },
    { name: "Samurai Champloo",    episodes: 26,  genre: "Action",      rating: 7.4, popularity: "Moderate", isLiked: false },
    { name: "Seven deadly sins",   episodes: 48,  genre: "Adventure",   rating: 8.3, popularity: "High",     isLiked: false },
    { name: "Wolf's Rain",         episodes: 30,  genre: "Action",      rating: 8.2, popularity: "High",     isLiked: false }
  ];  
  
  constructor() { }

  ngOnInit() { }

  toggleLike(selectedAnime:Anime) : void {
    selectedAnime.isLiked = !selectedAnime.isLiked;
  }

}
