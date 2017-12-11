import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Meatballs-Recipes-Potatoes-Kyllingefrikadeller-2554624.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2',
    'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Meatballs-Recipes-Potatoes-Kyllingefrikadeller-2554624.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
