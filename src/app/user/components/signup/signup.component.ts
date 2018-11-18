import { Component, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @ViewChild('signUpModal') public signUpModal:ModalDirective;
  signUpForm = this.fb.group({
     name: [''],
     email: ['', Validators.required ],
     password: ['', Validators.required ],
     confirmPassword: ['', Validators.required ],
     gender: [''],
     updates: ['']
  });

  constructor(private fb: FormBuilder) { }

  show(){
    this.signUpModal.show();
  }
  
  hide(){
    this.signUpModal.hide();
  }  

}
