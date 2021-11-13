import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/recipesBy.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-card-dish',
  templateUrl: './card-dish.component.html',
  styleUrls: [
    './card-dish.component.scss'
  ]
})
export class CardDishComponent implements  OnChanges {

  @Input() filter  = {
      term: '',
      filter: ''
  }

  recipes: Meal[] = [];

  constructor( private recipeService: RecipesServiceService,
               private router: Router) { }
 


  ngOnChanges(changes: SimpleChanges): void {
    if ( changes.filter && changes.filter.currentValue ) {

      console.log(this.filter );
        this.filterBy(this.filter);
    }
  }

  filterBy( { term = '', filter = '' }) {

    console.log( term, filter );
    switch ( filter ) {
      case 'category':
        console.log('entre')

          this.recipeService.filterByCategory( term )
              .subscribe( recipes => {

                console.log( recipes )
                 this.recipes = recipes;
                 console.log( this.recipes )
              });
        break;
      case 'ingredient':
          this.recipeService.filterByIngredient( term )
          .subscribe( recipes => {
            this.recipes = recipes;
          });
        break;
      case 'country':
          this.recipeService.filterByArea( term )
          .subscribe( recipes => {
            this.recipes = recipes;
          });
        break;
      default:
        break;
    }
  }

  showRecipe( id: string ) {
    this.router.navigateByUrl(`/recipe/${id}`);
  }


}
