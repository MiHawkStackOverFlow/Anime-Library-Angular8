import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Abhishek"s Anime Library';
  photo = 'https://www.wallpaperup.com/uploads/wallpapers/2014/03/24/308257/8e834bc087354f282ca06f4d6c92b37d-700.jpg';

  constructor(public spinner: SpinnerService){} 

  ngOnInit(){
    this.spinner.start();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.spinner.stop()
    }, 2000);  
  }
}
