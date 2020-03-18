import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): number {
    if(!value) return 0;

    /**
     * miles -> km (default)
     */

    switch(targetUnits) {
      case 'km': return value * 1.60694; 
      case 'm': return value * 1.60694 * 1000;
      case 'cm': return value * 1.60694 * 1000 * 1000;

      default: throw new Error('Target unit not supported');
    }
  }

}
