import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardRecipeModule } from 'src/app/components/card-recipe/card-recipe.module';
import { BannerPerPageModule } from 'src/app/shared/banner-per-page/banner-per-page.module';
import { CardCategoryModule } from 'src/app/components/card-category/card-category.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerPerPageModule,
    CardRecipeModule,
    CardCategoryModule
  ]
})
export class HomeModule { }
