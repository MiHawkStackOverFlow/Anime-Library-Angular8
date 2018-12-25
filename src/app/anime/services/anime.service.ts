import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Anime } from './../model/anime';
import { myAnimeList } from './../model/mock-animes';

@Injectable({
  providedIn: 'root'
})
export class AnimeService implements InMemoryDbService {
  createDb() {
     return myAnimeList;
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(animes: Anime[]): number {
    return animes.length > 0 ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;
  }
}
