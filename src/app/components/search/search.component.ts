import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Meal } from 'src/app/interfaces/recipes.interface';
import { AlertService } from 'src/app/services/alert.service';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  @Output('recipes') recipesByName: EventEmitter<Meal[]> = new EventEmitter();
  
  constructor(private recipesService: RecipesServiceService) { }

  ngOnInit(): void {
    this.search('s');
  }

  search( term: string ) {


    (term.length === 0) ? term = 's' : term;

    if (term) {
      
      this.recipesService.filterByName( term ).subscribe( recipes => {


          this.recipesByName.emit(recipes);


      })
    } 
  }

}
