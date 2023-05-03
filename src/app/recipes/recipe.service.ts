// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Subject } from 'rxjs';

// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
// import { Recipe } from './recipe.model';
// import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'
// import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
// import * as fromApp from '../store/app.reducer';

// @Injectable()
// export class RecipeService {
//     recipesChanged = new Subject<Recipe[]>

//     // private recipes: Recipe[] = [
//     //     new Recipe(
//     //         'Pizza', 
//     //         'Yummy sausage, peppers, tomatoes, and onions', 
//     //         'https://thebrilliantkitchen.com/wp-content/uploads/2022/04/Godfathers-Taco-Pizza-Copycat.jpg',
//     //         [
//     //             new Ingredient('Meat', 1),
//     //             new Ingredient('Vegetables',4),
//     //             new Ingredient('Can of Tomato Sauce', 2),
//     //             new Ingredient('Doughball', 1),
//     //             new Ingredient('Cheese', 10)
//     //         ]),
//     //     new Recipe('Salmon', 
//     //     'Baked w/ veggies and potatoes', 
//     //     'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Soy-Sauce-Salmon-2.jpg.webp',
//     //     [
//     //         new Ingredient('Meat', 1),
//     //         new Ingredient('Veggies', 3),
//     //         new Ingredient('Potato', 1)
//     //     ])
//     //   ];
//     private recipes: Recipe[] = [];

//     constructor(
//         private slService: ShoppingListService, 
//         private store: Store<fromApp.AppState>) {}

//     setRecipes(recipes: Recipe[]) {
//         this.recipes = recipes;
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     getRecipes(){
//         return this.recipes.slice();
//     }

//     getRecipe(index: number) {
//         return this.recipes[index];
//     }

//     addIngredientstoShoppingList(ingredients: Ingredient[]) {
//         // this.slService.addIngredients(ingredients);
//         this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
//     }

//     addRecipe(recipe: Recipe) {
//         this.recipes.push(recipe);
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     updateRecipe(index: number, newRecipe: Recipe) {
//         this.recipes[index] = newRecipe;
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     deleteRecipe(index: number) {
//         this.recipes.splice(index, 1);
//         this.recipesChanged.next(this.recipes.slice());
//     }
// }