import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecipeComponent } from './card-recipe.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    CardRecipeComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    CardRecipeComponent
  ]
})
export class CardRecipeModule { }
