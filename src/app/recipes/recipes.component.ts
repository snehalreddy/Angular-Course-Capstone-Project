import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelection(recipe: Recipe) {
    this.recipe = recipe;
  }
}
