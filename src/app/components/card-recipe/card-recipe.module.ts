import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecipeComponent } from './card-recipe.component';



@NgModule({
  declarations: [
    CardRecipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardRecipeComponent
  ]
})
export class CardRecipeModule { }
