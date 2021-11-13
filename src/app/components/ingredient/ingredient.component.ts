import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/ingredients.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {


  ingredients: Meal[] = [];

  constructor( private recipeService: RecipesServiceService,
               private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getAllIngredients().subscribe( ingredients => {
        this.ingredients = ingredients;
        console.log( this.ingredients );
    })
  }

  recipesBy( ingredient: Meal ) {

    this.recipeService.ingredient = ingredient;
    
    this.router.navigateByUrl(`/recipesBy/ingredient:${ ingredient.strIngredient }`);

  }

}
