import { Directive } from '@angular/core';
import { AppValidators } from '../validation/app-validators';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appZipcodeValidation], [zipcode]',
  providers: [
    {provide: NG_VALIDATORS, useValue: AppValidators.zipcode, multi: true}
    // multi precise qu'il peut y avoir plusieur valeur ex: dans une autre directive.
  ]
})
export class ZipcodeValidationDirective {}
