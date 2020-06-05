import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public desc: string;
    public imgPath: string;
    public ingredient: Ingredient[];

    constructor(name: string, desc: string, imgPath: string, ingredient: Ingredient[]) {
        this.name = name;
        this.desc = desc;
        this.imgPath = imgPath;
        this.ingredient = ingredient;
    }
}