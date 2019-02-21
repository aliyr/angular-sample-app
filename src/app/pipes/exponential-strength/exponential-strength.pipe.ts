import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    const exp = parseFloat(args);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
