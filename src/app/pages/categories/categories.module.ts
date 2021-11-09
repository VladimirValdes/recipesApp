import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CardCategoryModule } from 'src/app/components/card-category/card-category.module';
import { BannerPerPageModule } from 'src/app/shared/banner-per-page/banner-per-page.module';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CardCategoryModule,
    BannerPerPageModule
  ]
})
export class CategoriesModule { }
