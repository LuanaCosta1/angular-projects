import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    
  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {label: 'Pizzas', icon: 'pi pi-fw pi-heart', routerLink: ['/pizzas']},
      {label: 'Adicionar', icon: 'pi pi-fw pi-plus', routerLink: ['/pizza-create']}
  ];
  }
}