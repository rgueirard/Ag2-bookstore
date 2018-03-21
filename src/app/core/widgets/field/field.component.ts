import {Component, ContentChild, Input, OnInit, Optional} from '@angular/core';
import {NgForm, NgModel, NgControl, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgModel) ngModel: NgModel;
  @ContentChild(NgControl) ngControl: NgControl;
  // getter
  get control() {
    return this.ngModel || this.ngControl;
  }

  get form() {
    return this.ngForm || this.formGroupDirective
  }

  constructor(@Optional() public ngForm: NgForm, @Optional() public formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
  }

}
