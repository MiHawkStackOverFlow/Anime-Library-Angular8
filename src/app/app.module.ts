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
/*An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.
It intercepts Angular Http and HttpClient requests that would otherwise go to the remote server and
redirects them to an in-memory data store that you control.*/
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

// created modules
import { AnimeModule } from './anime/anime.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
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
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgReduxModule,
    Ng2IziToastModule,
    // created modules
    AnimeModule,
    UserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
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
