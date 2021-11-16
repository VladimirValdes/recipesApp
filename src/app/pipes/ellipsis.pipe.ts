import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(nameR: string, dish = false ): string {

    if (  dish ) {
      ( nameR.length > 20 ) ? nameR = nameR.slice(0, 20) + '...' : nameR;
      
    } else {
      ( nameR.length > 15 ) ? nameR = nameR.slice(0, 15) + '...' : nameR;

    }
    
    return nameR;
  }

}
