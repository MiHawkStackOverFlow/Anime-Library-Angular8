import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
