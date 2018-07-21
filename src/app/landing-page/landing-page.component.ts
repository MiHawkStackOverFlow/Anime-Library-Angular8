import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var $: any;

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
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  flip4: string = 'inactive';

  id: any;
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

  constructor() { }

  ngOnInit() {
    this.id = setInterval(() => {
      ($("#myCarousel") as any).carousel("next");
    }, 4000);
  }

  toggleFlip(flipNum: number) {
    let flipper = 'flip' + flipNum;
    this[flipper] = (this[flipper] == 'inactive') ? 'active' : 'inactive';
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}
