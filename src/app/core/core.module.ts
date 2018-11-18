import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { VillainModule } from '../villain/villain.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// created pipes
import { NaturalType } from './../shared/pipes/natural-type.pipe';

// created directives
import { RainbowDirective } from './directives/rainbow.directive';

@NgModule({
  imports: [ CommonModule, SharedModule, VillainModule ],
  exports: [ LandingPageComponent ],
  declarations: [ LandingPageComponent, NaturalType, RainbowDirective ]
})
export class CoreModule { }
