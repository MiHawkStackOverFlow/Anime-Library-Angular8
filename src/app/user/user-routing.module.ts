import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../user/components/user-list/user-list.component';
import { ContactComponent } from '../user/components/contact/contact.component';
import { OrderComponent } from '../user/components/order/order.component';

const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
