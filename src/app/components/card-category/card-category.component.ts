import { Component, OnInit } from '@angular/core';
import { Categories, Category } from 'src/app/interfaces/categories.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: [
    './card-category.component.scss'
  ]
})
export class CardCategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor( private recipesService: RecipesServiceService) { }

  ngOnInit(): void {
    this.recipesService.getAllCategories().subscribe( categories => {

      this.categories = categories;
      console.log( categories );
    })
  }

}
