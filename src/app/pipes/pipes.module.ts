import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './sanitazer.pipe';



@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe
  ]
})
export class PipesModule { }
