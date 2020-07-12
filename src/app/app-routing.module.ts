import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {EmptyRecipeComponent} from './recipes/empty-recipe/empty-recipe.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'recipes'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', pathMatch: 'full', component: EmptyRecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
