import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './landing-page/landing-page.component';

// created pipes
import { NaturalType } from './../shared/pipes/natural-type.pipe';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  exports: [ LandingPageComponent ],
  declarations: [ LandingPageComponent, NaturalType ]
})
export class CoreModule { }
