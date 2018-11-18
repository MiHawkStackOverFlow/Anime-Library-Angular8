import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from './../user/user.module';

// components
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// no need to export spinner service as providedIn flag will inject it in app module

@NgModule({
  imports: [ CommonModule, AppRoutingModule, UserModule ],
  exports: [ CarouselComponent, HeaderComponent, FooterComponent, SpinnerComponent ],
  declarations: [ CarouselComponent, HeaderComponent, FooterComponent, SpinnerComponent ]
})
export class SharedModule { }
