import { Component, OnInit, ViewChild } from '@angular/core';

import { Carousel } from '../../../shared/model/carousel';
import { Villain } from '../../../villain/model/villain';
import { sliderImages } from '../../model/mock-carousel';

import { DoCheckComponent } from './../do-check/do-check.component';
import { VillainService } from '../../../villain/services/villain.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  carouselHeight = 500;
  slideShow = true; 
  // titles on landing page
  searchTitle = 'Search Anime Manga And Videos';
  animeVillainsTitle = 'Popular Anime Villains';
  
  allVillains: Array<Villain>;
  // inputs to other components
  animeVillains: Array<Villain>;
  carouselImages: Array<Carousel>;
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor(private villainService: VillainService) { }

  ngOnInit(): void {
    // set anime villains from data
    this.getVillains();
    // input to carousel component
    this.carouselImages = sliderImages;
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
   console.log('AfterViewInit');
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

}
