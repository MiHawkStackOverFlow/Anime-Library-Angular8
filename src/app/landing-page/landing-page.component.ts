import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { timer, Observable, Subscription } from 'rxjs';

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
  flip: string = 'inactive';
  villainsSectionHeading: string = 'Popular Anime Villains Across Popular Anime Series';
  animeVillains: Array<Villain> = villains; 

  // data for carousel component
  height: number = 500; 
  sliderImages: Array<Carousel> = sliderImages;

  constructor() { }

  ngOnInit() { }

  toggleFlip(villain: Villain) {
   villain['flip'] = (villain['flip'] == 'active') ? 'inactive' : 'active';
  }

}
