import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pizza } from 'src/models/pizza.model';
import { PizzaService } from '../../../core/service/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
})
export class PizzasComponent implements OnInit {

  pizzas!: Pizza[];

  pizzaSelecionada?: Pizza;

  constructor(private service: PizzaService, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getPizzas();
  }

  selecionarPizza(pizza: Pizza): void {
    this.pizzaSelecionada = pizza;
  }

  getPizzas(): void {
    this.service.getAll().subscribe((pizzas) => {
      this.pizzas = pizzas;
    });
  }

  remove(pizza: Pizza): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar essa pizza?',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmed', detail:'Pizza deletada com sucesso!'});
        this.service.delete(pizza.id!).subscribe(() => {
          this.pizzas = this.pizzas.filter((p) => p.id != pizza.id);
        });
      },
    });
  }
}
