import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDishComponent } from './card-dish.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    CardDishComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    CardDishComponent
  ]
})
export class CardDishModule { }
