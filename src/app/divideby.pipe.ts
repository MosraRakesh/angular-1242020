import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divideby'
})
export class DividebyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value/2;
  }

}