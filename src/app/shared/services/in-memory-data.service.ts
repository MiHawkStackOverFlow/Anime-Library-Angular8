import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

// models
import { Anime } from '../../anime/model/anime';
import { Villain } from '../../villain/model/villain';
import { User } from '../../user/model/user';

// data
import { animes } from '../../anime/model/mock-animes';
import { villains } from '../../villain/model/mock-villains';
import { users } from '../../user/model/mock-users';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { animes, villains, users };
    }

    // Overrides the genId method to ensure that a anime always has an id.
    // If the animes array is empty,
    // the method below returns the initial number (1).
    // if the animes array is not empty, the method below returns the highest
    // anime id + 1.
    genId<T extends Anime | Villain | User>(myArray: T[]): number {
        return myArray.length > 0 ? Math.max(...myArray.map(t => t.id)) + 1 : 11;
    }
}
