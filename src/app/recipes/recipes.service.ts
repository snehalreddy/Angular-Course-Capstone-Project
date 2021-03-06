import {Recipe} from './recipe.model';
import {Subject} from 'rxjs';

export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Recipe One', 'This is the description for recipe one.', 'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg', [
  //     new Ingredient('Ingredient One', 1)
  //   ]),
  //   new Recipe('Recipe Two', 'This is the description for recipe two.', 'https://storcpdkenticomedia.blob.core.windows.net/media/lolretail/media/lolr-media/article_images/less-sodium-butter-with-canola-oil-760x580.jpg?ext=.jpg', [
  //     new Ingredient('Ingredient One', 1),
  //     new Ingredient('Ingredient Two', 2)
  //   ]),
  //   new Recipe('Recipe Three', 'This is the description for recipe three.', 'https://i.pinimg.com/originals/08/60/8e/08608e8343aa9d63383ca80466bd5192.jpg', [
  //     new Ingredient('Ingredient One', 1),
  //     new Ingredient('Ingredient Two', 2),
  //     new Ingredient('Ingredient Three', 3)
  //   ])
  // ];
  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
