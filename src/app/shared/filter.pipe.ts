import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (filterString.length === 0 || value.length === 0){
      return value;
    }
    else{
      const resultArray = [];
      for (const item of value) {
        if(item[propName].includes(filterString)){
          resultArray.push(item);
        }

      }
      return resultArray;
    }
  }

}
