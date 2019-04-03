import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ModalDirective } from 'ngx-bootstrap';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showPassword: boolean = false;
  signInForm: FormGroup;
  returnUrl: string;
  @ViewChild('signInModal') public signInModal: ModalDirective;

  constructor(
    private fb: FormBuilder, 
    public iziToast: Ng2IzitoastService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
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
    this.authenticationService.login(this.signInForm.controls.email.value, this.signInForm.controls.password.value)
    .pipe(first())
    .subscribe(
        data => {
            // this.router.navigate([this.returnUrl]);
            console.log("Data", data);
        },
        error => {
            console.log("Error is ", error);            
        });
    // reset the form and close modal
    this.hide();
  }

}
