import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let div = 60;
    let hours = Math.floor(value/div);
    let minutes = value%div;
    let result = hours + "h" + minutes + 'm'
    return result;
  }

}
