import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimeRoutingModule } from './anime-routing.module';

import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { PopularAnimeComponent } from './components/popular-anime/popular-anime.component';
import { TableComponent } from './components/table/table.component';
import { AnimePicListComponent } from './components/anime-pic-list/anime-pic-list.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { AnimeSearchComponent } from './components/anime-search/anime-search.component';

// created directives
import { RainbowDirective } from './../core/directives/rainbow.directive';

@NgModule({
  imports: [ CommonModule, AnimeRoutingModule, FormsModule ],
  exports: [ AnimeListComponent, PopularAnimeComponent, TableComponent, AnimeSearchComponent ],
  declarations: [ AnimeListComponent, PopularAnimeComponent, TableComponent, AnimePicListComponent, 
                  AnimeDetailComponent, AnimeSearchComponent, RainbowDirective ]
})
export class AnimeModule { }
