import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categories, Category } from '../interfaces/categories.interface';
import { Areas, Meal } from '../interfaces/areas.interface';
import { Recipes, Meal as MealR } from '../interfaces/recipes.interface';
import { Ingredients, Meal as MealI } from '../interfaces/ingredients.interface';
import { FilterRecipe, Meal as MealF } from '../interfaces/recipesBy.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  category!: Category;
  ingredient!: MealI;
  area!: Meal;
  requestFinis = false;
  
  categories: Category[] = [];
  ingredients: MealI[] = [];
  areas: Meal[] = [];
  recipesByL: MealR[] = [];

  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor( private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>  {
      return this.http.get< Categories >(`${ this.baseUrl}/categories.php`)
                      .pipe(
                          map( categories  => {
                            this.categories = categories.categories;
                             return categories.categories;
                          })
                      )
  }

  getAllArea(): Observable< Meal[] > {
    return this.http.get< Areas >(`${ this.baseUrl}/list.php?a=list`)
                      .pipe(
                          map( recipe  => {
                            this.areas = recipe.meals;
                             return recipe.meals;
                          })
                      )
  }

  getAllIngredients(): Observable< MealI []> {
    return this.http.get< Ingredients >(`${ this.baseUrl}/list.php?i=list`)
                    .pipe(
                        map( ingredients  => {
                          this.ingredients = ingredients.meals;
                          return ingredients.meals;
                        })
                    )
  }

  getRecipeById( id: string ): Observable< MealR > {
    return this.http.get< Recipes >(`${ this.baseUrl}/lookup.php?i=${ id }`)
                    .pipe(
                        map( recipe  => {
                          return recipe.meals[0];
                        })
                    )
  }

  filterByLetter( term = 'a'): Observable< MealR[] > {
    return this.http.get< Recipes >(`${ this.baseUrl}/search.php?f=${ term }`)
                      .pipe(
                          map( recipe  => {
                            this.recipesByL = recipe.meals;
                             return recipe.meals;
                        
                          })
                      )
  }

  filterByArea( term = ''): Observable< MealF[] > {
    return this.http.get< FilterRecipe >(`${ this.baseUrl}/filter.php?a=${ term }`)
                      .pipe(
                          map( recipe  => {
                             return recipe.meals;
                          })
                      )
  }

  filterByCategory( term: string ): Observable< MealF[] > {
    console.log( term )
    return this.http.get< FilterRecipe >(`${ this.baseUrl}/filter.php?c=${term}`)
                      .pipe(
                          map( recipe  => {
                             return recipe.meals;
                          })
                      )
  }

  filterByIngredient( term = ''): Observable< MealF[] > {
    return this.http.get< FilterRecipe >(`${ this.baseUrl}/filter.php?i=${ term }`)
                      .pipe(
                          map( recipe  => {
                             return recipe.meals;
                          })
                      )
  }

  filterByName( term: string ): Observable< MealR[] > {
    return this.http.get< Recipes >(`${ this.baseUrl}/search.php?s=${ term }`)
                      .pipe(
                          map( recipe  => {
                             return recipe.meals;
                          })
                      )
  }
  

}
