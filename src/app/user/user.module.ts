import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { FavouriteAnimeComponent } from './components/favourite-anime/favourite-anime.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component';

import { HttpErrorHandler } from '../shared/services/http-error-handler.service';
import { MessageService } from '../shared/services/message.service';

@NgModule({
  imports: [ CommonModule, ModalModule.forRoot(), ReactiveFormsModule, FormsModule, UserRoutingModule ],
  exports: [ FavouriteAnimeComponent, SignupComponent, SignInComponent ],
  declarations: [ FavouriteAnimeComponent, SignupComponent, UserListComponent, ContactComponent, OrderComponent, SignInComponent ],
  providers: [ HttpErrorHandler, MessageService ]
})
export class UserModule { }
