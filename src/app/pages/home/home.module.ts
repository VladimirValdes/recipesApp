import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { CardRecipeModule } from 'src/app/components/card-recipe/card-recipe.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    CardRecipeModule
  ]
})
export class HomeModule { }
