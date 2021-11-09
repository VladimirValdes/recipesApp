import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { BannerPerPageModule } from 'src/app/shared/banner-per-page/banner-per-page.module';


@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    BannerPerPageModule
  ]
})
export class RecipesModule { }
