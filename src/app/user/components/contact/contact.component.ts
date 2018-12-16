import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactRequest } from './../../model/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = 'Contact Us';
  contactForm: FormGroup;
  countries = ['India', 'Japan', 'USA', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        email: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      message: new FormControl()
    });
  }

  onSubmit() {
    // get random value and patch value for id
    const random = Math.floor(Math.random() * 1000);
    this.contactForm.patchValue({
      personalData : {
        id: random
      }
    });
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: { id: null, email: '', name: '', country: '' },
                             requestType: '', text: '' });
  }
}
