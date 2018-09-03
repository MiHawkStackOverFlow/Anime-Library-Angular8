import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteAnimeComponent } from './components/favourite-anime/favourite-anime.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ FavouriteAnimeComponent ],
  declarations: [ FavouriteAnimeComponent ]
})
export class UserModule { }
