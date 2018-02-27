import {
  Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit /*, OnChanges*/ {

  private _value: number;

  // @Input('value') rating: number;

// setter
  @Input() set value(rating: number) {
    this._value = rating;
    this.buildArray(rating);
  };
// getter
  get value(): number {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<number>();

  stars: boolean [];

  constructor() { }

  updateRating(index: number): void {
    this.valueChange.emit(index + 1);
  }

  onEnter(index: number) {
    this.buildArray(index+1);
  }

  onLeave() {
    this.buildArray(this.value);
  }

  private buildArray(rating) {
    this.stars = [1, 2, 3, 4, 5].map(i => i <= rating);
  }

  ngOnInit() {
    // this.stars = [1, 2, 3, 4, 5].map(i => i <= this.rating);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['rating'] /*&& !changes['rating'].firstChange*/) {
  //     this.stars = [1, 2, 3, 4, 5].map(i => i <= changes['rating'].currentValue);
  //   }
  // }

}
