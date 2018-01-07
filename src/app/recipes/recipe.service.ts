import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
    recipesChanged = new Subject<Recipe []>();
    private recipes: Recipe[] = [
        new Recipe('Lasanga', 'This is simply a test',
        'http://maxpixel.freegreatpicture.com/static/photo/2x/Tomatoes-Meal-Eat-Food-Mozzarella-Lasagna-Basil-605655.jpg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('A Test Recipe 2', 'This is simply a test 2',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Meatballs-Recipes-Potatoes-Kyllingefrikadeller-2554624.jpg', 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

    constructor() {}

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

}
