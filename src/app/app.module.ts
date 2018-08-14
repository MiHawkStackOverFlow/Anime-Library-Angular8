// external modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

// internal modules
import { SharedModule } from'./shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PopularAnimeComponent } from './popular-anime/popular-anime.component';
import { FavouriteAnimeComponent } from './favourite-anime/favourite-anime.component';

// redux store
import { AnimeAppState, rootReducer, INITIAL_STATE } from './shared/redux/store';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    NgReduxModule
  ],
  declarations: [
    AppComponent,
    AnimeListComponent,
    LandingPageComponent,
    PopularAnimeComponent,
    FavouriteAnimeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<AnimeAppState>) {
     ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
