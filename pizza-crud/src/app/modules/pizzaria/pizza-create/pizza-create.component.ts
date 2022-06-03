import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PizzaService } from '../../../core/service/pizza.service';
import { Pizza } from 'src/models/pizza.model';
import { IngredientService } from '../../../core/service/ingredient.service';
import { Ingredient } from 'src/models/ingredient.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {
  pizza: Pizza = {
    name: '',
    ingredients: [''],
    price: 0,
  };
  
  ingredients!: Ingredient[];

  selectedIngredients!: Ingredient[];

  constructor(
    private service: PizzaService,
    private location: Location,
    private ingredientService: IngredientService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getAll().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  create(): void {
    
    let ingredientsList: string[] = [];
    this.selectedIngredients.forEach((ingredient) => {ingredientsList.push(ingredient.name)});

    this.pizza.ingredients = ingredientsList;

    this.service.add(this.pizza).subscribe(() => {});
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Pizza criada com sucesso! '});

    this.pizza.name = '';
    this.pizza.ingredients = [''];
    this.pizza.price = 0;
  }

  goBack(): void {
    this.location.back();
  }
}
