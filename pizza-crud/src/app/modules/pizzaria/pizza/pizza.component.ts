import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/models/pizza.model';
import { PizzaService } from '../../../core/service/pizza.service';
import { Ingredient } from 'src/models/ingredient.model';
import { IngredientService } from '../../../core/service/ingredient.service';
import { Location } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent implements OnInit {
  pizza!: Pizza;
  ingredients!: Ingredient[];

  selectedIngredients!: Ingredient[];

  constructor(
    private route: ActivatedRoute,
    private service: PizzaService,
    private location: Location,
    private ingredientService: IngredientService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPizza();
    this.getIngredients();
  }

  getPizza(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let oldIngredients: Ingredient[] =[];
    if (id !== undefined && id !== null) {
      this.service.getById(parseInt(id)).subscribe((data) => {
        this.pizza = data;
        data.ingredients.forEach((i) => {
          oldIngredients.push({name: i});
        });
      });
      this.service.getById(parseInt(id)).subscribe((data) => (this.selectedIngredients = oldIngredients));
    }
  }

  getIngredients(): void {
    this.ingredientService.getAll().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  save(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && id !== undefined) {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Pizza alterada com sucesso! '});

      if (this.selectedIngredients !== undefined) {
        let ingredientsList: string[] = [];
        this.selectedIngredients.forEach((ingredient) => {ingredientsList.push(ingredient.name)});
        this.pizza.ingredients = ingredientsList;
      }

      this.service.update(this.pizza, parseInt(id)).subscribe((data) => {this.pizza = data});
    }
  }

  goBack(): void {
    this.location.back();
  }
}
