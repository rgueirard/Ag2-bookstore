import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormGroup, Form, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AppValidators} from '../../core/validation/app-validators';

@Component({
  selector: 'app-cart-order-reactive',
  templateUrl: './cart-order-reactive.component.html',
  styleUrls: ['./cart-order-reactive.component.css']
})
export class CartOrderReactiveComponent implements OnInit {

  submitted = false;

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  hasBillingAddress: FormControl;

  constructor(private title: Title, private fb: FormBuilder) { }

  isDisabled() {
    return !this.form.valid && this.submitted;
  }

  withBillingAddress() {
    return this.hasBillingAddress.value;
  }

  toggleBillingAddress() {
    if (this.withBillingAddress()) {
      this.billing = this.buildAdressGroup();
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.save();
    }
  }

  save() {
    console.log(this.form.value);
  }

  private buildAdressGroup() {
    return new FormGroup({
      street: new FormControl(),
      zipcode: new FormControl('', [
        Validators.required,
        AppValidators.zipcode
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl()
    });
  }

  ngOnInit() {
    const initialData: any = {};

    // this.identity = new FormGroup({
    //   firstname: new FormControl(),
    //   lastname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(2)
    //   ]),
    //   email: new FormControl('', {
    //     validators: [
    //       Validators.required,
    //       AppValidators.email('altran.com')
    //     ]
    //   }),
    //   phone: new FormControl()
    // });

    this.identity = this.fb.group({
      firstname: '',
      lastname: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['', {
        validators: [
          Validators.required,
          AppValidators.email('altran.com')
        ]
      }],
      phone: ''
    });

    this.shipping = this.buildAdressGroup();
    this.billing = this.buildAdressGroup();
    this.hasBillingAddress = new FormControl(false);

    this.form = new FormGroup({
      identity: this.identity,
      shipping: this.shipping,
      hasBillingAddress: this.hasBillingAddress
    });

    this.form.patchValue({
      'identity': {
        'firstname': 'oob',
        'lastname': 'boo'
      }
    });

    this.title.setTitle('Commande (Réactive)');
  }

}
