import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import { AnimeModule } from './../anime/anime.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnimeRatingsComponent } from './components/anime-ratings/anime-ratings.component';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { AnimeGenresComponent } from './components/anime-genres/anime-genres.component';
import { AnimeViewsComponent } from './components/anime-views/anime-views.component';
import { AnimeEpisodesComponent } from './components/anime-episodes/anime-episodes.component';
import { AnimeDataComponent } from './components/anime-data/anime-data.component';

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [DashboardComponent, AnimeRatingsComponent, AnimeGenresComponent, AnimeViewsComponent, AnimeEpisodesComponent, AnimeDataComponent],
  imports: [
    CommonModule,
    AnimeModule,
    ChartModule,
    DashboardRoutingModule
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }]
})
export class DashboardModule { }
