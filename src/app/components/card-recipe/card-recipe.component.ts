import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/recipes.interface';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: [
    './card-recipe.component.scss'
  ]
})
export class CardRecipeComponent implements OnInit, OnChanges {

  @Input() recipes: Meal[] = []

  constructor( private router: Router,
               private alertService: AlertService) { }
  

  ngOnInit(): void {
   
  }

  showRecipe( id: string ) {
    this.router.navigateByUrl(`/recipe/${id}`);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if ( changes.recipes.currentValue === null) {
      this.alertService.showAlert('Opps', "We don't find it", 'info');
      console.log('Opps we dont find it');
    }

  }

}
