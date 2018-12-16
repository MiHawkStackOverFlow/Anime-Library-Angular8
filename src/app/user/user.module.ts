import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FavouriteAnimeComponent } from './components/favourite-anime/favourite-anime.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { HttpErrorHandler } from '../shared/services/http-error-handler.service';
import { MessageService } from '../shared/services/message.service';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component'; 

@NgModule({
  imports: [ CommonModule, ModalModule.forRoot(), ReactiveFormsModule, FormsModule ],
  exports: [ FavouriteAnimeComponent, SignupComponent ],
  declarations: [ FavouriteAnimeComponent, SignupComponent, UserListComponent, ContactComponent, OrderComponent ],
  providers: [ HttpErrorHandler, MessageService ]
})
export class UserModule { }
