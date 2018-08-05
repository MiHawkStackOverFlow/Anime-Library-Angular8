import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from'./shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PopularAnimeComponent } from './popular-anime/popular-anime.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AnimeListComponent,
    LandingPageComponent,
    PopularAnimeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
