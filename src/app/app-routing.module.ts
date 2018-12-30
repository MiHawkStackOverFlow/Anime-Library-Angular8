import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'anime-list', loadChildren: './anime/anime.module#AnimeModule' },
      { path: 'detail/:id', loadChildren: './anime/anime.module#AnimeModule' },
      { path: 'popular-anime', loadChildren: './anime/anime.module#AnimeModule' },
      // { path: 'user-list', loadChildren: './user/user.module#UserModule' },
      // { path: 'contact-us', loadChildren: './user/user.module#UserModule' },
      // { path: 'order', loadChildren: './user/user.module#UserModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
