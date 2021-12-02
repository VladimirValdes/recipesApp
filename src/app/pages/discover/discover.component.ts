import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/areas.interface';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  areas: Meal[] = [];
  banner = {
    title: "Discover",
    desc: "Let's check different recipes by country or by ingredients."
  };

  page = 0;
  items = 14;

  constructor( private recipeServices: RecipesServiceService,
               private router: Router) { }

  ngOnInit(): void {

    if ( this.recipeServices.areas.length > 0) {
        this.areas = this.recipeServices.areas;

    } else {
      this.recipeServices.getAllArea().subscribe( areas => {
        this.areas = areas.filter( a => a.strArea !== 'Unknown');
      });
    }
   
  }

  recipesBy( area: Meal ) {

    if (area) {
       this.recipeServices.area = area;
       this.router.navigateByUrl(`/recipesBy/country:${ area.strArea }`);
    }

   

  }

}
