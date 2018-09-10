import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';

import { FavouriteAnimeComponent } from './components/favourite-anime/favourite-anime.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [ CommonModule, ModalModule.forRoot() ],
  exports: [ FavouriteAnimeComponent, SignupComponent ],
  declarations: [ FavouriteAnimeComponent, SignupComponent ]
})
export class UserModule { }
