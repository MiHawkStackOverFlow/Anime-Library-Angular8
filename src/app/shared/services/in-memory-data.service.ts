import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

// for animes
import { Anime } from '../../anime/model/anime';
import { animes } from '../../anime/model/mock-animes';
import { villains } from '../../villain/model/mock-villains';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { animes, villains };
    }

    // Overrides the genId method to ensure that a anime always has an id.
    // If the animes array is empty,
    // the method below returns the initial number (1).
    // if the animes array is not empty, the method below returns the highest
    // anime id + 1.
    genId(animes: Anime[]): number {
       return animes.length > 0 ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;
    }
}
