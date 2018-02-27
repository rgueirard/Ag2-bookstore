import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from "@angular/router";
import { TextRatingPipe } from './text-rating.pipe';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    MenuComponent,
    TextRatingPipe,
    RatingComponent
  ],
  declarations: [LoadingComponent, MenuComponent, TextRatingPipe, RatingComponent]
})
export class WidgetsModule { }
