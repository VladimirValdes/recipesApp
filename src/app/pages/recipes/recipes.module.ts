import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { BannerPerPageModule } from 'src/app/shared/banner-per-page/banner-per-page.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { CardRecipeModule } from 'src/app/components/card-recipe/card-recipe.module';


@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    BannerPerPageModule,
    SearchModule,
    CardRecipeModule,
  ]
})
export class RecipesModule { }
