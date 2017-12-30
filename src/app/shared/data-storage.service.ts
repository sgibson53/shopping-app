import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(`https://ng-shopping-app-75008.firebaseio.com/recipes.json`, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get<Recipe[]>(`https://ng-shopping-app-75008.firebaseio.com/recipes.json`);
    }
}
