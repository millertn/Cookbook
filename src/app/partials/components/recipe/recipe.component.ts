import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input('recipe') recipe:Recipe|null = null;

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    console.log(this.elementRef);
  }

  toggleFavorite(e:Event) : void {
    console.log(e);
    // e?.target?
  }

}
