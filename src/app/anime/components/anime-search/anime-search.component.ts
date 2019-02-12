import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Anime } from '../../model/anime';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit {
  anime: Anime = {
    id: 1, name: 'Dragon Ball Super', episodes: 500, genre: 'Adventure', rating: 9.0,
    popularity: 'High', isLiked: false, imageUrl: ''
  };
  // search anime variables
  animes$: Observable<Array<Anime>>;
  private searchTerms = new Subject<string>();

  constructor(private animeService: AnimeService) { }

   ngOnInit(): void {
    // search using subject and service call
    this.animes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.animeService.searchAnimes(term))
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
