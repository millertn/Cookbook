import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  public recipes:Array<Recipe> = [
    new Recipe('Tortilla', 'Delicious tortilla recipe', 'https://hips.hearstapps.com/hmg-prod/images/190412-white-flour-tortillas-horizontal-1555969801.png'),
    new Recipe("Michelle's chocolate chip cookies", "Delicious chocolate chip cookie recipe", "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg")
  ];

  ngOnInit(): void {
  }

}
