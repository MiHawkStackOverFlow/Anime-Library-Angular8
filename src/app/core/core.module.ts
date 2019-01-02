import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VillainModule } from '../villain/villain.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// created pipes
import { NaturalType } from './../shared/pipes/natural-type.pipe';

// created directives
import { RainbowDirective } from './directives/rainbow.directive';
import { DoCheckComponent } from './components/do-check/do-check.component';

@NgModule({
  imports: [ CommonModule, SharedModule, VillainModule, RouterModule, FormsModule ],
  exports: [ LandingPageComponent ],
  declarations: [ LandingPageComponent, NaturalType, RainbowDirective, DoCheckComponent ]
})
export class CoreModule { }
