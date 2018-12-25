import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AnimeService } from './services/anime.service';

import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { PopularAnimeComponent } from './components/popular-anime/popular-anime.component';
import { TableComponent } from './components/table/table.component';
import { AnimePicListComponent } from './components/anime-pic-list/anime-pic-list.component';

@NgModule({
  imports: [ CommonModule, AppRoutingModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      AnimeService, { dataEncapsulation: false }
    )
  ],
  exports: [ AnimeListComponent, PopularAnimeComponent, TableComponent ],
  declarations: [ AnimeListComponent, PopularAnimeComponent, TableComponent, AnimePicListComponent ]
})
export class AnimeModule { }
