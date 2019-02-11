import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { AnimeListComponent } from './anime/components/anime-list/anime-list.component';
import { PopularAnimeComponent } from './anime/components/popular-anime/popular-anime.component';
import { AnimeDetailComponent } from './anime/components/anime-detail/anime-detail.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { OrderComponent } from './user/components/order/order.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'anime-list', component: AnimeListComponent },
      { path: 'popular-anime', component: PopularAnimeComponent },
      { path: 'detail/:id', component: AnimeDetailComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'contact-us',  component: ContactComponent },
      { path: 'order',  component: OrderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
