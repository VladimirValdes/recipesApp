import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './sanitazer.pipe';
import { EllipsisPipe } from './ellipsis.pipe';
import { FilterPaginationPipe } from './filter-pagination.pipe';



@NgModule({
  declarations: [
    SafePipe,
    EllipsisPipe,
    FilterPaginationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    EllipsisPipe,
    FilterPaginationPipe
  ]
})
export class PipesModule { }
