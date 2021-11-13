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
  }

  constructor( private recipesServices: RecipesServiceService,
               private router: Router) { }

  ngOnInit(): void {
    this.areas = this.recipesServices.areas.filter( a => a.strArea !== 'Unknown');
  }

  recipesBy( area: Meal ) {

    this.recipesServices.area = area;
    
    this.router.navigateByUrl(`/recipesBy/country:${ area.strArea }`);

  }

}
