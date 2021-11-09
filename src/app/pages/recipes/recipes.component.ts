import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
