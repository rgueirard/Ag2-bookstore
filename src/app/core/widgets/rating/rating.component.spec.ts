import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<app-rating [(value)]="rating"></app-rating>'

})
class ParentComponent {
  rating = 0;
}

describe('RatingComponent', () => {
  let parentComponent: ParentComponent;
  let parentFixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent, ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(ParentComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
  });

  it('should display ★★★☆☆', () => {
    parentComponent.rating = 3;
    parentFixture.detectChanges();
    expect(parentFixture.debugElement.nativeElement.textContent).toContain('★★★☆☆');
  });

  it('should change rating', () => {
    const stars = parentFixture.debugElement.queryAll(By.css('.star'));
    stars[1].triggerEventHandler('click', null);
    expect(parentComponent.rating).toEqual(2);
  });
});
