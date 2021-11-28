import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/recipesBy.interface';
import { AlertService } from 'src/app/services/alert.service';
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
               private router: Router,
               private alertService: AlertService) { }
 


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

          this.recipeService.filterByCategory( term )
              .subscribe( recipes => {

                  if (recipes === null ) {
                    this.alertService.showAlert('Oops', 'That category does not exist', 'info');
                    this.router.navigateByUrl('/categories');
                  } else {
                    this.recipes = recipes;

                  }
              });
        break;
      case 'ingredient':
          this.recipeService.filterByIngredient( term )
          .subscribe( recipes => {

             if (recipes === null ) {
                  this.alertService.showAlert('Oops', 'That ingredient does not exist', 'info');
                  this.router.navigateByUrl('/discover');
              } else {
                  this.recipes = recipes;

              }
              
          });
        break;
      case 'country':
          this.recipeService.filterByArea( term )
          .subscribe( recipes => {
            if (recipes === null ) {
              this.alertService.showAlert('Oops', 'That country does not exist', 'info');
              this.router.navigateByUrl('/discover');
          } else {
              this.recipes = recipes;

          }
          });
        break;

      default:
        this.router.navigateByUrl('/home');
        break;
    }
  }

  showRecipe( id: string ) {
    this.router.navigateByUrl(`/recipe/${id}`);
  }


}
