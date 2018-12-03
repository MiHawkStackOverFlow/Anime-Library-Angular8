import { Component, OnInit, ViewChild } from '@angular/core';

import { Carousel } from '../../../shared/model/carousel';
import { Villain } from '../../../villain/model/villain';
import { Anime } from './../../../anime/model/anime';
import { sliderImages } from '../../model/mock-carousel';
import { villains } from '../../../villain/model/mock-villains';

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

  ngOnInit(): void {
    // set anime villains from data
    this.allVillains = villains;
    // anime villains section set to show 4 anime villains
    this.sliceData('backward');
    // input to carousel component
    this.carouselImages = sliderImages;
  }

  // slide data to show for villains section
  sliceData(direction: string): void {
    if (direction === 'backward') {
      this.animeVillains = this.allVillains.slice(0, 4);
    } else if (direction === 'forward') {
      this.animeVillains = this.allVillains.slice(4, 8);
    }
  }

}
