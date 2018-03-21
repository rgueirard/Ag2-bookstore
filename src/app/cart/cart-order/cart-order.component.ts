import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import { NgForm, NgModel } from "@angular/forms";
import { CountryService } from '../../core/services/country.service';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
//view query
  @ViewChild('formInfo') formInfo: NgForm; // <= par variable (de template)
  //@ViewChildren(NgForm) forms // <= par class (javascript)

  @ViewChild('countryModel') countryModel: NgModel;

  countries$: Observable<string[]>;

  data = {
    identity: {
      firstname: 'boo',
      lastname: 'oob',
      email: '',
      phone: ''
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: ''
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: ''
    },
    hasBillingAddress: false
  };

  constructor(private title: Title, private country: CountryService) { }

  save() {
    if (this.formInfo.valid) {
      console.log('save', this.data);
    }
  }

  log() {
    console.log(this.formInfo);
  }

  ngOnInit() {
    this.countries$ = this.countryModel.valueChanges
      .pipe(
        filter(name => name && name.trim().length >= 2),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(name => this.country.searchCountry(name))
      );
    this.title.setTitle('Commande');
  }

}
