import { Component, OnInit } from '@angular/core';

import { Carousel } from '../../../shared/model/carousel';
import { Villain } from '../../../villain/model/villain';

import { sliderImages } from '../../model/mock-carousel';
import { villains } from '../../../villain/model/mock-villains';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  carouselHeight: number = 500;
  allVillains: Array<Villain>;
  // inputs to other components
  animeVillains: Array<Villain>;
  carouselImages: Array<Carousel>;
  // titles on landing page
  searchTitle: string = 'Search Anime Manga And Videos';
  animeVillainsTitle: string = 'Popular Anime Villains'; 
  
  constructor() { }

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
    if(direction === 'backward') {
      this.animeVillains = this.allVillains.slice(0,4);
    } else if(direction === 'forward') {
      this.animeVillains = this.allVillains.slice(4,8);
    }    
  }

}
