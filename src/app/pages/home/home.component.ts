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

  // areas: Meal[] = [];
  recipes: MealR[] = [];
  banner = {
    title: "Simple and Tasty Juice Recipes",
    desc: " Want to learn cook but confused how to start? Let's check our recipes"
  }

  showOnly = 4;

  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit(): void {
    this.recipeService.filterByLetter().subscribe( recipes => {
      this.recipes = recipes;
      console.log( this.recipes );
    })

    
  }

}
