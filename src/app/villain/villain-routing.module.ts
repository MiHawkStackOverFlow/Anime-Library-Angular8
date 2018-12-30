import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllVillainsComponent } from './components/all-villains/all-villains.component';

const routes: Routes = [
    { path: 'all-villains', component:  AllVillainsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainRoutingModule {}
