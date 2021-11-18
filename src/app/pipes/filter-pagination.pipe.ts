import { Pipe, PipeTransform } from '@angular/core';
import { Meal as MealA } from '../interfaces/areas.interface';
import { Meal as MealR } from '../interfaces/ingredients.interface';

@Pipe({
  name: 'filterPagination'
})
export class FilterPaginationPipe implements PipeTransform {

  transform( data: any[] , page: number = 0, amountP: number = 0): any[]  {
    // console.log(data.slice(page, page + amountP));
    return data.slice(page, page + amountP);
  }

}
