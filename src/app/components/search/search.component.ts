import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Meal } from 'src/app/interfaces/recipes.interface';
import { AlertService } from 'src/app/services/alert.service';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  // inputSearch  = new FormControl('');

  @Output('recipes') recipesByName: EventEmitter<Meal[]> = new EventEmitter();

  
  constructor( private fb: FormBuilder,
               private recipesService: RecipesServiceService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [],
    });
    
  }

  search(  ) {
    const term = this.searchForm.value.search;
    if ( term ) {
      this.recipesService.filterByName( term ).subscribe( recipes => {
            this.recipesByName.emit(recipes);
      });
    }
  }

}
