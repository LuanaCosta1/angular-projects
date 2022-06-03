import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsRating'
})
export class StarsRatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return Math.round(value / 2);
  }
}
