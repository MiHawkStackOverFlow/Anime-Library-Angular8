import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showPassword: boolean = false;
  signInForm: FormGroup;
  @ViewChild('signInModal') public signInModal: ModalDirective;

  constructor(private fb: FormBuilder, public iziToast: Ng2IzitoastService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get email() { return this.signInForm.get('email'); }

  get password() { return this.signInForm.get('password'); }

  show() {
    this.signInModal.show();
  }

  hide() {
    this.signInForm.reset();
    this.signInModal.hide();
  }

  
  showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // Perform API call to submit data to server
    console.log("Form value", this.signInForm.value);
    // show success or error on API call
    
    // reset the form and close modal
    this.hide();
  }

}
