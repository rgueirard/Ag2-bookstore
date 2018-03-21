import { Directive, Input, forwardRef } from '@angular/core';
import { AppValidators } from '../validation/app-validators';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidation], input[type=email]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidationDirective),
      multi: true
    }
    // multi precise qu'il peut y avoir plusieur valeur ex: dans une autre directive.
  ]
})
export class EmailValidationDirective implements Validator {

  @Input() domain: string;

  validate(control: AbstractControl): ValidationErrors | any {
    return AppValidators.email(this.domain)(control);
  }

  constructor () {

  }
}
