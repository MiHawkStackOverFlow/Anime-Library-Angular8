import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeModule } from './../anime/anime.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

declare var require: any;
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [DashboardComponent],
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
