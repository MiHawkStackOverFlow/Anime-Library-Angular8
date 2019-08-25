import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';

import { Carousel } from '../../../shared/model/carousel';
import { Villain } from '../../../villain/model/villain';
import { sliderImages } from '../../model/mock-carousel';

import { DoCheckComponent } from './../do-check/do-check.component';
import { AnimeSearchComponent } from './../../../anime/components/anime-search/anime-search.component';

import { LoggerService } from '../../../shared/services/logger.service';
import { VillainService } from '../../../villain/services/villain.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit, AfterViewChecked {
  carouselHeight = 500;
  slideShow = true;
  comment = '';
  private prevAnime = '';
  // titles on landing page
  searchTitle = 'Search Anime Manga And Videos';
  animeVillainsTitle = 'Popular Anime Villains';

  allVillains: Array<Villain>;
  // inputs to other components
  animeVillains: Array<Villain>;
  carouselImages: Array<Carousel>;

  // Query for a VIEW child of type `AnimeSearchComponent`
  @ViewChild(AnimeSearchComponent, { static: false }) viewChild: AnimeSearchComponent;
  @ViewChild(DoCheckComponent, { static: false }) childView: DoCheckComponent;

  constructor(private villainService: VillainService,
              private logger: LoggerService,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit(): void {
    // set anime villains from data
    this.getVillains();
    // input to carousel component
    this.carouselImages = sliderImages;
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
   console.log('AfterViewInit called.');
  }

  // commenting the logging below for now as frequency of calling is high
  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevAnime === this.viewChild.anime.name) {
      // this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevAnime = this.viewChild.anime.name;
      // this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }


  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const commentMessage = this.viewChild.anime.name.length > 30 ? `That's a long name` : '';
    if (commentMessage !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = commentMessage);
    }
    if (commentMessage === `That's a long name`) {
      // show alert for too long name
      this.iziToast.destroy();
      this.iziToast.show({
        title: 'Long name',
        message: commentMessage,
        timeout: 3000,
        position: 'topCenter',
        close: true,
        backgroundColor: 'orange',
        icon: 'fa fa-exclamation-triangle',
        toastOnce: true
      });
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.anime.name : 'no'} child view`;
    this.logger.log(message);
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
        error =>  console.log('Error: ', error),
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
