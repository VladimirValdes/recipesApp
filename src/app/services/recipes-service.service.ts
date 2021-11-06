import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categories, Category } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor( private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>  {
      return this.http.get< Categories >(`${ this.baseUrl}/categories.php`)
                      .pipe(
                          map( categories  => {
                             return categories.categories;
                          })
                      )
  }
}
