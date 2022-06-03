import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';

const routes: Routes = [
  {
    path: '',
    component: PizzasComponent
  },
  {
    path: 'pizzas/:id',
    component: PizzaComponent
  },
  {
    path: 'pizza-create',
    component: PizzaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzariaRoutingModule { }
