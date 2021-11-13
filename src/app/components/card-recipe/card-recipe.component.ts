import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/recipes.interface';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: [
    './card-recipe.component.scss'
  ]
})
export class CardRecipeComponent implements OnInit {

  @Input() recipes: Meal[] = []

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  showRecipe( id: string ) {
    this.router.navigateByUrl(`/recipe/${id}`);
  }

}
