import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    PipesModule
  ],
  exports: [
  ]
})
export class RecipeModule { }
