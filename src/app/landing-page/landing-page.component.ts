import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Carousel } from '../shared/interfaces/carousel';
import { Villain } from '../shared/interfaces/villain';

import { sliderImages } from '../shared/mock-data/mock-carousel';
import { villains } from '../shared/mock-data/mock-villains';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class LandingPageComponent implements OnInit {
  searchTitle: string = 'Search Anime Manga And Videos';
  animeVillains: Array<Villain> = [];

  // data for carousel component
  height: number = 500; 
  sliderImages: Array<Carousel> = sliderImages;

  constructor() { }

  ngOnInit() { 
    this.sliceData('forward');
  }

  toggleFlip(villain: Villain) {
   villain['flip'] = (villain['flip'] == 'active') ? 'inactive' : 'active';
  }

  sliceData(direction: string) {
    if(direction === 'forward') {
      this.animeVillains = villains.slice(0,4);
    } else if(direction === 'backward') {
      this.animeVillains = villains.slice(4,8);
    }    
  }

}
