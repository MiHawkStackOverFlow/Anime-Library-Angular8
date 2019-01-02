import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { PopularAnimeComponent } from './components/popular-anime/popular-anime.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';

const routes: Routes = [
    { path: 'anime-list', component: AnimeListComponent },
    { path: 'popular-anime', component: PopularAnimeComponent },
    { path: 'detail/:id', component: AnimeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule {}
