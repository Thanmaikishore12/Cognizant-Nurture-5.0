import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabel implements PipeTransform {

  transform(value: number): string {
    if (value >= 4) {
      return `${value} Credits (Full Course)`;
    }

    return `${value} Credits`;
  }

}