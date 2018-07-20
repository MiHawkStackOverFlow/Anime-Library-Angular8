import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ HeaderComponent, FooterComponent, SpinnerComponent ],
  declarations: [ HeaderComponent, FooterComponent, SpinnerComponent ]
})
export class SharedModule { }
