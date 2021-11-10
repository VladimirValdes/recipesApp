import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/categories.interface';
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
  @Input() showOnly: number = 0;


  constructor( private recipesService: RecipesServiceService) { }

  ngOnInit(): void {
    this.recipesService.getAllCategories().subscribe( categories => {

      if ( this.showOnly ==  0 ) {
        this.showOnly = categories.length;
        
      }
      this.categories = categories;
    })
  }

}
