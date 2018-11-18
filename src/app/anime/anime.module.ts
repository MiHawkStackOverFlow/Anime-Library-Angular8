import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { PopularAnimeComponent } from './components/popular-anime/popular-anime.component';
import { TableComponent } from './components/table/table.component';
import { AnimePicListComponent } from './components/anime-pic-list/anime-pic-list.component';

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  exports: [ AnimeListComponent, PopularAnimeComponent, TableComponent ],
  declarations: [ AnimeListComponent, PopularAnimeComponent, TableComponent, AnimePicListComponent ]
})
export class AnimeModule { }
