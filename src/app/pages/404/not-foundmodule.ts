import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { CommonModule } from '@angular/common';
import { notFoundRouterModule } from './notFound-routing.module';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    notFoundRouterModule
  ]
})
export class notFoundModule { }
