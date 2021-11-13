import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-recipes',
  templateUrl: './banner-recipes.component.html',
  styleUrls: ['./banner-recipes.component.scss']
})
export class BannerRecipesComponent implements OnInit {

  @Input() search = {
    img: '',
    searchBy: '',
    term: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
