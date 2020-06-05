import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  onSelected = new EventEmitter<Recipe>();


   private recipe: Recipe[] = [
        new Recipe(
          'Kung Pao Chicken', 
          `No it doesn't have corona virus`,
          'https://www.jessicagavin.com/wp-content/uploads/2019/01/kung-pao-chicken-5-1200.jpg',
            [ 
              new Ingredient('Chinese guy', 2),
              new Ingredient('Chicken', 1)
            ]
          ),
        new Recipe(
          'Dragon Chicken',
          'It has the virus',
          'https://i2.wp.com/www.mareenasrecipecollections.com/wp-content/uploads/2014/03/dragon-chicken-recipe-16351-dish.1024x1024.jpg?w=590',
            [ 
              new Ingredient('Dragon', 2),
              new Ingredient('Chicken', 1)
            ]
          )
      ];
      
      getRecipe() {
          return this.recipe.slice()
      }

      constructor(private shopList: ShoppingListService) {}

      addToShopList(ingredients: Ingredient[]) {

        this.shopList.addToShopList(ingredients)

      }
}