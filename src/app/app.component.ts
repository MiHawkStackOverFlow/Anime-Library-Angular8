import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = `Abhishek's Anime Library`;
  //photo: string = 'https://www.wallpaperup.com/uploads/wallpapers/2014/03/24/308257/8e834bc087354f282ca06f4d6c92b37d-700.jpg';

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
