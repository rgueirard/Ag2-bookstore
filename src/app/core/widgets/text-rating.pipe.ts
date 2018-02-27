import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textRating'
})
export class TextRatingPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //
  //   return null;
  // }

  transform(value: number): string {
    return '★★★★★'.substring(0, value);
  }

}
