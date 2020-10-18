import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../ingredient/ingredient.model'
@Component({
  selector: 'app-shopping-list-top',
  templateUrl: './shopping-list-top.component.html',
  styleUrls: ['./shopping-list-top.component.css']
})
export class ShoppingListTopComponent implements OnInit {
ingredients: Ingredient[]=[
  new Ingredient('apples',5), new Ingredient('tomatoes',10)
];
  constructor() { }

  ngOnInit(): void {
  }

}
