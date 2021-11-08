import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/areas.interface';
import { Meal as MealR } from 'src/app/interfaces/recipes.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  areas: Meal[] = [];
  recipes: MealR[] = [];
  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit(): void {


    this.recipeService.getAllArea().subscribe( areas => {
      this.areas = areas;
      console.log( areas );
    });

    this.recipeService.filterByLetter().subscribe( recipes => {
      this.recipes = recipes;
      console.log( this.recipes );
    })

    
  }

}
