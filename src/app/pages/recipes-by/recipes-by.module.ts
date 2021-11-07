import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesByRoutingModule } from './recipes-by-routing.module';
import { RecipesByComponent } from './recipes-by.component';


@NgModule({
  declarations: [
    RecipesByComponent
  ],
  imports: [
    CommonModule,
    RecipesByRoutingModule
  ]
})
export class RecipesByModule { }
