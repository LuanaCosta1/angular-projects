import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle',
})
export class FilterTitlePipe implements PipeTransform {
  transform(value: Array<any>, searchFilter: string) {
    if (searchFilter) {
      searchFilter = searchFilter.toUpperCase();

      return value.filter(
        (a) => a.title.toUpperCase().indexOf(searchFilter) >= 0
      );
    } else {
      return value;
    }
  }
}
