import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () =>
        import('./pages/home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'discover', loadChildren: () =>
        import('./pages/discover/discover.module').then( m => m.DiscoverModule )
  },
  {
    path: 'categories', loadChildren: () =>
        import('./pages/categories/categories.module').then( m => m.CategoriesModule)
  },
  {
    path: 'recipes', loadChildren: () =>
        import('./pages/recipes/recipes.module').then( m => m.RecipesModule )
  },
  {
    path: 'recipesBy/:termino', loadChildren: () =>
        import('./pages/recipes-by/recipes-by.module').then( m => m.RecipesByModule )
  },
  {
    path: 'recipe/:id', loadChildren: () =>
        import('./pages/recipe/recipe.module').then( m => m.RecipeModule )
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', loadChildren: () => 
          import('./pages/404/not-foundmodule').then( m => m.notFoundModule )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
