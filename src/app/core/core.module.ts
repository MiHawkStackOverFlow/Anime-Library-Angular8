import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AnimeModule } from '../anime/anime.module';
import { VillainModule } from '../villain/villain.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DoCheckComponent } from './components/do-check/do-check.component';

// created pipes
import { NaturalType } from './../shared/pipes/natural-type.pipe';

@NgModule({
  imports: [ CommonModule, SharedModule, AnimeModule, VillainModule, RouterModule ],
  exports: [ LandingPageComponent ],
  declarations: [ LandingPageComponent, NaturalType, DoCheckComponent ]
})
export class CoreModule { }
