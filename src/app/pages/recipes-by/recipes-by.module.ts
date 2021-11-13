import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesByRoutingModule } from './recipes-by-routing.module';
import { RecipesByComponent } from './recipes-by.component';
import { BannerRecipesModule } from 'src/app/shared/banner-recipes/banner-recipes.module';
import { CardDishModule } from 'src/app/components/card-dish/card-dish.module';


@NgModule({
  declarations: [
    RecipesByComponent
  ],
  imports: [
    CommonModule,
    RecipesByRoutingModule,
    BannerRecipesModule,
    CardDishModule
  ]
})
export class RecipesByModule { }
