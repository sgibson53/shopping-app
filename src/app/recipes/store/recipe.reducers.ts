import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
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
      ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const editedRecipes = [...state.recipes];
            editedRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: editedRecipes
            };
        default:
            return state;
    }
}
