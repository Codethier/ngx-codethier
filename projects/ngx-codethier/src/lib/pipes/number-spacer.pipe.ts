import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CodethierNumberSpacer'
})
export class CodethierNumberSpacerPipe implements PipeTransform {

  transform(value: any,): string {
    if (typeof value === 'number'){
    return value.toLocaleString()
    }
    else {
      return value
    }
  }

}
