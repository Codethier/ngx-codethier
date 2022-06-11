import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codethier-ngx-numberSpacer'
})
export class NumberSpacerPipe implements PipeTransform {

  transform(value: any,): string {
    if (typeof value === 'number'){
    return value.toLocaleString()
    }
    else {
      return value
    }
  }

}
