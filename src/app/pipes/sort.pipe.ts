/**
 * Vishal Singh
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

/**
 * SortPipe for sorting ad per id,name and cost
 */
export class SortPipe implements PipeTransform {

  transform(value: any, field: string): any[] {
    if(!Array.isArray(value))
    {
      return;
    }
    value.sort((first: any, second: any) => {
      if (first[field] < second[field]) {
        return -1;
      } else if (first[field] > second[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }

}
