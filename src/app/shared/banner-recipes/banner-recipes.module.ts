import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerRecipesComponent } from './banner-recipes.component';



@NgModule({
  declarations: [
    BannerRecipesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerRecipesComponent

  ]
})
export class BannerRecipesModule { }
