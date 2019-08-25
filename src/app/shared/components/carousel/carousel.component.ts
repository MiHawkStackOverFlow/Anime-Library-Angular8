import { Component, OnInit, Input } from '@angular/core';
import { timer, Observable, Subscription } from 'rxjs';
import { Carousel } from '../../model/carousel';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() sliderImages: Array<Carousel>;
  @Input() sliderHeight: number;
  @Input() slideShow: boolean;

  subscription: Subscription;

  constructor() { }

  // start carousel slideshow using rxjs timer
  startSlideShow(): void {
    const source: Observable<number> = timer(3000, 4000);
    this.subscription = source.subscribe(() => {
      ($('#myCarousel') as any).carousel('next');
    });
  }

  ngOnInit() {
    if (this.slideShow) {
      this.startSlideShow();
    }
  }

  nextSlide(): void {
    ($('#myCarousel') as any).carousel('next');
  }

  previousSlide(): void {
    ($('#myCarousel') as any).carousel('prev');
  }

  // unsubsribe from subscription
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
