import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredient.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [
    IngredientComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    PaginationModule
  ],
  exports: [
    IngredientComponent
  ]
})
export class IngredientModule { }
