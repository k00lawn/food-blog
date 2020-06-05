import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class ShoppingListService {

    ingredientChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 50),
        new Ingredient('Tomatoes', 20)
      ];

      getIngredients() {
          return this.ingredients.slice()
      }

      addIngredient(ingredient){
          this.ingredients.push(ingredient)
          this.ingredientChanged.emit(this.ingredients.slice())
      }

      addToShopList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientChanged.emit(this.ingredients.slice())
      }
    
}