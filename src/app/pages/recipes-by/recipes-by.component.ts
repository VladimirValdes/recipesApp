import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-recipes-by',
  templateUrl: './recipes-by.component.html',
  styleUrls: ['./recipes-by.component.scss']
})
export class RecipesByComponent implements OnInit {


  

  filter  = {
    term: '',
    filter: ''
  }

  search = {
    img: '',
    searchBy: '',
    term: ''
  };

  constructor( private activedRouter: ActivatedRoute,
               private recipesService: RecipesServiceService ) { }

  ngOnInit(): void {
    this.activedRouter.params.subscribe( ({ termino }) => {

       const [ a, b] = termino.split(':');

        this.search.searchBy =  a;
        this.filter.term = b;
        this.filter.filter = a;
        this.search.term = b;


       
        switch (a) {
          case 'category':
            this.search.img = this.recipesService.category.strCategoryThumb;
            
            break;
          case 'ingredient':
            this.search.img = `https://www.themealdb.com/images/ingredients/${ this.recipesService.ingredient.strIngredient }.png`;
            // this.search.term = this.recipesService.ingredient.strIngredient;

            break;
          case 'country':
            this.search.img = `/assets/areas/${ this.recipesService.area.strArea }.png`;
            // this.search.term = this.recipesService.area.strArea;
            break;
          default:
            break;
        }
    })
  }

}
