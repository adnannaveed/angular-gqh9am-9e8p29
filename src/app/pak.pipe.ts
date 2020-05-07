import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pak'
})
export class PakPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}