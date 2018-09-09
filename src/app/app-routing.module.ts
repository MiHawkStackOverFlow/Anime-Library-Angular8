import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimeListComponent }   from './anime/components/anime-list/anime-list.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { PopularAnimeComponent } from './anime/components/popular-anime/popular-anime.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'anime-list', component: AnimeListComponent },
      { path: 'popular-anime', component: PopularAnimeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
