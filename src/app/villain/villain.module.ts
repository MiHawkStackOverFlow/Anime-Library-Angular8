import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VillainRoutingModule } from './villain-routing.module';

import { VillainListComponent } from './components/villain-list/villain-list.component';
import { AllVillainsComponent } from './components/all-villains/all-villains.component';


@NgModule({
  imports: [ CommonModule, BrowserAnimationsModule, VillainRoutingModule ],
  exports: [ VillainListComponent, AllVillainsComponent ],
  declarations: [ VillainListComponent, AllVillainsComponent ]
})
export class VillainModule { }
