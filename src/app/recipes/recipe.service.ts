import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Meatballs-Recipes-Potatoes-Kyllingefrikadeller-2554624.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Meatballs-Recipes-Potatoes-Kyllingefrikadeller-2554624.jpg')
      ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}
