import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from "@angular/router";
import { TextRatingPipe } from './text-rating.pipe';
import { RatingComponent } from './rating/rating.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { OrderButtonComponent } from './order-button/order-button.component';
import {ErrorComponent} from './error/error.component';
import {FieldComponent} from './field/field.component';
import { ZipcodeValidationDirective } from './zipcode-validation.directive';
import { EmailValidationDirective } from './email-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    MenuComponent,
    TextRatingPipe,
    RatingComponent,
    BuyButtonComponent,
    SmallCartComponent,
    OrderButtonComponent,
    ErrorComponent,
    FieldComponent,
    ZipcodeValidationDirective,
    EmailValidationDirective
  ],
  declarations: [
    LoadingComponent,
    MenuComponent,
    TextRatingPipe,
    RatingComponent,
    BuyButtonComponent,
    SmallCartComponent,
    OrderButtonComponent,
    ErrorComponent,
    FieldComponent,
    ZipcodeValidationDirective,
    EmailValidationDirective
  ]
})
export class WidgetsModule { }
