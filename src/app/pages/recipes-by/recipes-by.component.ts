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

       const [ filter, term] = termino.split(':');


        this.search.searchBy =  filter;
        this.filter.term = term;
        this.filter.filter = filter;
        this.search.term = term;


       
        switch (filter) {
          case 'category':
          if (this.recipesService.category !== undefined) {
            this.search.img = this.recipesService.category.strCategoryThumb;
          }

            
            break;
          case 'ingredient':

          if (this.recipesService.ingredient !== undefined) {
            this.search.img = `https://www.themealdb.com/images/ingredients/${ this.recipesService.ingredient.strIngredient }.png` || '';
          }
            // console.log( this.recipesService.ingredient.strIngredient)

            break;
          case 'country':
            if (this.recipesService.area !== undefined) {
              this.search.img = `/assets/areas/${ this.recipesService.area.strArea }.png`;
            }
  
            break;
          default:
            break;
        }
    })
  }

}
