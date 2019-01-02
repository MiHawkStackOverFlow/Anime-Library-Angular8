import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Order } from './../../model/order';
import { forbiddenNameValidator } from './../../../shared/directives/forbidden-name.directive';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  countries = ['India', 'Japan', 'USA', 'Germany', 'Italy', 'France'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      personalData: this.formBuilder.group({
        id: null,
        name: '',
        email: ['', [Validators.required, Validators.email] ],
        country: ''
      }),
      items: this.formBuilder.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/i)]],
      description: '',
      price: ['', Validators.required ]
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log('test', this.items.controls[0]['controls']);
  }

  onSubmit() {
    // get random value and patch value for id
    const random = Math.floor(Math.random() * 1000);
    this.orderForm.patchValue({
      personalData : {
        id: random
      }
    });
    // Make sure to create a deep copy of the form-model
    const result: Order = Object.assign({}, this.orderForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  deleteItem(index: number) {
    this.items.removeAt(index);
  }

  get email() {
    return this.orderForm.controls.personalData.get('email');
  }

  // get name() {
  //   return this.orderForm.get('items.name');
  // }
}
