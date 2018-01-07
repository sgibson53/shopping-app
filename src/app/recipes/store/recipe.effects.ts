import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import * as RecipeActions from '../store/recipe.actions';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {

    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.http.get<Recipe[]>(`https://ng-shopping-app-75008.firebaseio.com/recipes.json`,
            {
                observe: 'body',
                responseType: 'json'
            });
        })
        .map(
            recipes => {
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
            }
        );

    @Effect({dispatch: false})
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPES)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state]) => {
            const req = new HttpRequest(
                'PUT',
                `https://ng-shopping-app-75008.firebaseio.com/recipes.json`,
                state.recipes,
                {reportProgress: true});
            return this.http.request(req);
        });

    constructor (
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromRecipe.FeatureState>) {}
}
