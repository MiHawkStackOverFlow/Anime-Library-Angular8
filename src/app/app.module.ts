// angular libraries
/* Angular loads as a collection of JavaScript modules.
   You can think of them as library modules. Each Angular library name begins with the @angular prefix.*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular applications
   that rests on the XMLHttpRequest interface exposed by browsers.
   Additional benefits of HttpClient include testability features, typed request and response objects,
   request and response interception, Observable apis, and streamlined error handling. */
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

// created modules
import { AnimeModule } from './anime/anime.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// no need to import spinner service because of providedIn flag

// created components
import { AppComponent } from './app.component';

// redux store
import { AnimeAppState, rootReducer, INITIAL_STATE } from './core/redux/store';

// iziToast
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  imports: [
    // external modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgReduxModule,
    Ng2IziToastModule,
    // app modules
    AnimeModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AnimeAppState>) {
     ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
