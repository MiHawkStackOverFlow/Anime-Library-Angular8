import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ModalDirective } from 'ngx-bootstrap';
import { passwordConfirmValidator } from '../../directives/password-confirm.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  signUpForm: any;
  @ViewChild('signUpModal') public signUpModal: ModalDirective;

  constructor(private fb: FormBuilder, public iziToast: Ng2IzitoastService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [''],
      email: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      gender: ['male'],
      updates: [true]
    }, { validators: passwordConfirmValidator });
  }

  show() {
    this.signUpModal.show();
  }

  hide() {
    this.signUpForm.reset({ gender: "male", updates: true });
    this.signUpModal.hide();
  }

  showHidePassword(type: string): void {
    (type === 'password') ? (this.showPassword = !this.showPassword): (this.showConfirmPassword = !this.showConfirmPassword);
  }

  onSubmit() {
    // Perform API call to submit data to server
    console.log("Form value", this.signUpForm.value);
    // show success or error on API call
    this.iziToast.show({
      title: "Success", 
      message: "You have been signed up successfully.",
      timeout: 5000,
      position: "topCenter",
      close: true,
      backgroundColor: "green",
      icon: "fa fa-thumbs-o-up"
    });
    // reset the form and close modal
    this.hide();
  }

}
