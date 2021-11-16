import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './sanitazer.pipe';
import { EllipsisPipe } from './ellipsis.pipe';



@NgModule({
  declarations: [
    SafePipe,
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    EllipsisPipe
  ]
})
export class PipesModule { }
