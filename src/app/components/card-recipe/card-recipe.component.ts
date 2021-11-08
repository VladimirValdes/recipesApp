import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
