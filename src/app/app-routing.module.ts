import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimeListComponent }   from './anime-list/anime-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'anime-list', component: AnimeListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
