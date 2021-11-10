import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/recipes.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  banner = {
    title: "Recipes",
    desc: "You don't what to cook today, don't worry let's choose a recipe."
  }

  recipes: Meal[] = [];


  constructor( private recipeService: RecipesServiceService) { }

  ngOnInit(): void {
    this.recipeService.filterByLetter( "b" ).subscribe( recipes => {
      this.recipes = recipes;
      console.log( this.recipes );
    })
  }

}
