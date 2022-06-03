import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PizzariaRoutingModule } from './pizzaria-routing.module';

import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    PizzasComponent,
    PizzaComponent,
    PizzaCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PizzariaRoutingModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    ListboxModule,
    CardModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PizzariaModule { }
