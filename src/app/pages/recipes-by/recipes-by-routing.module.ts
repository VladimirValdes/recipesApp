import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesByComponent } from './recipes-by.component';

const routes: Routes = [
  {
    path: '', component: RecipesByComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesByRoutingModule { }
