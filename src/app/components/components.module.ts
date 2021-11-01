import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CardDishComponent } from './card-dish/card-dish.component';
import { CardRecipeComponent } from './card-recipe/card-recipe.component';



@NgModule({
  declarations: [
    CardCategoryComponent,
    CardDishComponent,
    CardRecipeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
