import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimeListComponent }   from './anime-list/anime-list.component';

const routes: Routes = [
  { path: 'anime-list', component: AnimeListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
