import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MyList } from 'src/app/core/models/mylist.model';
import { MylistService } from 'src/app/core/services/mylist/mylist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  list!: MyList[];

  listLen: number = 50;

  constructor(private service: MylistService) {}

  ngOnInit(): void {
    this.menuItems();
    this.getMyList();
  }

  getMyList(): void {
    this.service.getAll().subscribe((myList) => {
      this.list = myList;
    this.listLen = this.list.length;
    });
  }

  menuItems(): void {
    this.items = [
      {
        label: 'Página Inicial',
        icon: 'pi pi-home', routerLink: ['/home']
      },
      {
        label: 'Filmes',
        icon: 'pi pi-th-large', routerLink: ['/movies/list']
      },
      {
        label: 'Pesquisar',
        icon: 'pi pi-search', routerLink: ['/movies/search-movie']
      },
      {
        label: 'Minha Lista',
        icon: 'pi pi-fw pi-list', routerLink: ['/my-list']
      },
    ];
  }
}
