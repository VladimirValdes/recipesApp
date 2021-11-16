import { isNull } from '@angular/compiler/src/output/output_ast';
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
  ingredients: string[] = [];
  measures: string[] =  [];
  showI = true;
  showInstructions = false;

  constructor( private recipeService: RecipesServiceService,
               private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( ({ id }) => {
      this.getRecipe( id );
    })
  }

  getRecipe( id: string ) {
    this.recipeService.getRecipeById( id ).subscribe( recipe => {
     
      this.recipe = recipe;

      
      this.getIngredients( this.recipe );
      this.getVideo( this.recipe.strYoutube );
      this.getTags( this.recipe.strTags );

    });
  }

  getIngredients( recipe: any ) {

    console.log( recipe)

    Object.getOwnPropertyNames( recipe ).forEach( ( key, index ) => {

      // console.log(key);
      if ( recipe[key] ) {
        if ( index >= 9 && index <= 28) {
       
          this.ingredients.push(recipe[key]);

        } else if( index >= 28 && index <= 48) {

          this.measures.push( recipe[key] )
        }
      }

      

    });

    console.log( this.ingredients, this.measures );
    

  }

  getTags( tags: string) {
      if (tags) {
        this.tags = tags.split(",");
      }
  }

  getVideo( video: string) {
    
    const [, idvideo ] = video.split('=');
    this.video = `https://www.youtube.com/embed/${ idvideo }`;

  }

  show( value: boolean ) {
    this.showI = value;
    // this.showInstructions = this.showInstructions;
  }

}
