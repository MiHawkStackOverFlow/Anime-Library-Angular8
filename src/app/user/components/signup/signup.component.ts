import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @ViewChild('signUpModal') public signUpModal:ModalDirective;
  // @Input() title:string;

  constructor() { }

  show(){
    this.signUpModal.show();
  }
  
  hide(){
    this.signUpModal.hide();
  }  

}
