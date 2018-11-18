import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VillainListComponent } from './components/villain-list/villain-list.component';
import { AllVillainsComponent } from './components/all-villains/all-villains.component';


@NgModule({
  imports: [ CommonModule, BrowserAnimationsModule ],
  exports: [ VillainListComponent, AllVillainsComponent ],
  declarations: [ VillainListComponent, AllVillainsComponent ]
})
export class VillainModule { }
