import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { AnimeListComponent } from './anime-list/anime-list.component';
import { PopularAnimeComponent } from './popular-anime/popular-anime.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  exports: [ AnimeListComponent, PopularAnimeComponent, TableComponent ],
  declarations: [ AnimeListComponent, PopularAnimeComponent, TableComponent ]
})
export class AnimeModule { }
