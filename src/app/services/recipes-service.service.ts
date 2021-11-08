import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categories, Category } from '../interfaces/categories.interface';
import { Areas, Meal } from '../interfaces/areas.interface';
import { Recipes, Meal as MealR } from '../interfaces/recipes.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  // www.themealdb.com/api/json/v1/1/list.php?a=list
  // www.themealdb.com/api/json/v1/1/search.php?f=a

  constructor( private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>  {
      return this.http.get< Categories >(`${ this.baseUrl}/categories.php`)
                      .pipe(
                          map( categories  => {
                             return categories.categories;
                          })
                      )
  }

  getAllArea(): Observable< Meal[] > {
    return this.http.get< Areas >(`${ this.baseUrl}/list.php?a=list`)
                      .pipe(
                          map( recipe  => {
                             return recipe.meals;
                          })
                      )
  }

  filterByLetter( term = 'a'): Observable< MealR[] > {
    return this.http.get< Recipes >(`${ this.baseUrl}/search.php?f=${ term }`)
                      .pipe(
                          map( recipe  => {
                             return recipe.meals;
                          })
                      )
  }
  

}
