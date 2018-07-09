import { Component } from '@angular/core';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Abhishek's Anime Library`;
  photo = 'https://www.wallpaperup.com/uploads/wallpapers/2014/03/24/308257/8e834bc087354f282ca06f4d6c92b37d-700.jpg';

  sliderImages = [ 
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

  constructor(public spinner: SpinnerService){} 

  ngOnInit() {
    this.spinner.start();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.spinner.stop()
    }, 2000);  
  }
}
