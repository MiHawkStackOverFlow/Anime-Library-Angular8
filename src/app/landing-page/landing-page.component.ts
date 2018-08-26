import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var $: any;
import { timer, Observable, Subscription } from 'rxjs';

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
  id: any;
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  flip4: string = 'inactive';
  
  subscribe: Subscription;
  villainsSectionHeading: string = 'Popular Anime Villains Across Popular Anime Series';  
  sliderImages: Array<Object> = [ 
    { img: 'https://www.animelab.com/assets/images/home/covers/attack-on-titan-s2.png',
      name: 'Attack On Titan',
      description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama'
    },
    { img: 'https://www.animelab.com/assets/images/home/covers/dragonballsuper.png',
      name: 'Dragon Ball Super',
      description: 'Dragon Ball Super is a Japanese anime television series produced by Toei Animation'
    },
    { img: 'https://www.animelab.com/assets/images/home/covers/one-punch-man.png',
      name: 'One Punch Man',
      description: 'One-Punch Man is an ongoing Japanese superhero webcomic created by ONE'
    },
    { img: 'https://www.animelab.com/assets/images/home/covers/naruto-shippuden-purple.png',
      name: 'Naruto Shippuden',
      description: `Naruto: Shippuden is an anime series adapted from Part II of Masashi Kishimoto's manga series, with exactly 500 episodes.`
    }
  ];

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
      let source: Observable<number> = timer(3000, 4000);
      this.subscribe = source.subscribe(() => {
        ($("#myCarousel") as any).carousel("next");
      });    
  }

  toggleFlip(flipNum: number) {
    let flipper = 'flip' + flipNum;
    this[flipper] = (this[flipper] == 'inactive') ? 'active' : 'inactive';
  }

  ngOnDestroy() {
    if(this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }

}
