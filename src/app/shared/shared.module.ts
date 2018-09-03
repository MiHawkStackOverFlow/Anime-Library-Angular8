import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// no need to export spinner service as providedIn flag will inject it in app module

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  exports: [ HeaderComponent, FooterComponent, SpinnerComponent ],
  declarations: [ HeaderComponent, FooterComponent, SpinnerComponent ]
})
export class SharedModule { }
