import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/interfaces/recipes.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe!: Meal;
  video: string = "";
  tags: string[] = [];

  constructor( private recipeService: RecipesServiceService,
               private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( ({ id }) => {
      this.getRecipe( id );
    })
  }

  getRecipe( id: string ) {
    this.recipeService.getRecipeById( id ).subscribe( recipe => {
      console.log( recipe );
      this.recipe = recipe;

      const [,,, code ] = this.recipe.strYoutube.split('/');
      const [, video ] = code.split('=');
      this.video = `https://www.youtube.com/embed/${ video }`;

      
      this.tags = this.recipe.strTags.split(",");

    });
  }

}
