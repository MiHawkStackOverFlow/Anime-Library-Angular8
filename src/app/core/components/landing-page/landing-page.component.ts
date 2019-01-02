import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


import { Carousel } from '../../../shared/model/carousel';
import { Villain } from '../../../villain/model/villain';
import { Anime } from './../../../anime/model/anime';
import { sliderImages } from '../../model/mock-carousel';
import { VillainService } from '../../../villain/services/villain.service';
import { AnimeService } from '../../../anime/services/anime.service';

import { DoCheckComponent } from './../do-check/do-check.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  carouselHeight = 500;
  slideShow = true;
  anime: Anime = {
    id: 1, name: 'Dragon Ball Z', episodes: 500, genre: 'Adventure', rating: 9.0,
    popularity: 'High', isLiked: false, imageUrl: ''
  };
  allVillains: Array<Villain>;
  // inputs to other components
  animeVillains: Array<Villain>;
  carouselImages: Array<Carousel>;
  // titles on landing page
  searchTitle = 'Search Anime Manga And Videos';
  animeVillainsTitle = 'Popular Anime Villains';
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;
  // search anime variables
  animes$: Observable<Array<Anime>>;
  private searchTerms = new Subject<string>();

  constructor(private animeService: AnimeService, private villainService: VillainService) { }

  ngOnInit(): void {
    // set anime villains from data
    this.getVillains();
    // input to carousel component
    this.carouselImages = sliderImages;

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

  getVillains(): void {
    /**
     * the .subscribe() method of any observable accepts 3 callbacks like this:
        obs.subscribe(
          nextCallback,
          errorCallback,
          completeCallback
        );
     */
    this.villainService.getVillains().subscribe(
        villains => this.allVillains = villains,
        error =>  console.log("Error: ", error),
        () => this.sliceData('backward')          // on observable call completion call sliceData method
    ); 
  }

  // slide data to show for villains section
  sliceData(direction: string): void {
      if (direction === 'backward') {
        this.animeVillains = this.allVillains.slice(0, 4);
      } else if (direction === 'forward') {
        this.animeVillains = this.allVillains.slice(4, 8);
      }
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
