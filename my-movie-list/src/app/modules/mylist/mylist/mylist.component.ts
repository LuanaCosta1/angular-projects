import { Component, OnInit } from '@angular/core';
import { MyList } from 'src/app/core/models/mylist.model';
import { MylistService } from 'src/app/core/services/mylist/mylist.service';
import { Location } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Order } from 'src/app/core/models/order.model';
import { Progress } from 'src/app/core/models/progess.model';
import { observable, catchError } from 'rxjs';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss'],
})

export class MylistComponent implements OnInit {
  order!: Order[];
  progress!: Progress[];
  
  movieFiltered: Array<{ id: number, title: string }> = [];
  filteredWord: string = '';

  selectedOrder!: Order;
  selectedProgressStatus!: Progress;
  submitted = false;

  form!: FormGroup;

  movies!: MyList;
  list!: MyList[];

  rankedList!: MyList[];
  noRankedList!: MyList[];
  formReady!: boolean;

  constructor(
    private service: MylistService,
    private location: Location,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.order = [
      {name: 'Selecionar'},
      {name: 'Adicionados recentemente'},
      {name: 'Nota'},
    ];

    this.progress = [
      {status: "Não assisti"},
      {status: "Em andamento"},
      {status: "Já terminei :)"},
      {status: "Não terminei"},
    ]
  }

  ngOnInit(): void {
    this.getMyList();

    this.form = this.formBuilder.group({
      nota: new FormControl(undefined, [Validators.min(0), Validators.max(10), Validators.required]),
      obs: new FormControl(''),
      selectedProgressStatus: new FormControl('', Validators.required)
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  orderByRating(): void {
    this.rankedList = [];
    this.noRankedList = [];
    if (this.selectedOrder.name == 'Nota') {
      this.service.getAll().subscribe(list => {
        this.list = list.sort((a, b) => {
          return b.myRating! - a.myRating!
        });
      });
    } else if (this.selectedOrder.name == 'Adicionados recentemente') {
      this.service.getAll().subscribe((noRankedList) => {
        this.list = noRankedList.reverse();
      });
    } else if (this.selectedOrder.name == 'Selecionar') {
      this.service.getAll().subscribe((list) => {this.list = list});
    }
  }

  getMyList(): void {
    this.service.getAll().subscribe((myList) => {
      this.list = myList;
      if (this.list.length == 0) {
        console.log('Sem filmes')
      }
    });
  }

  edit(movie: MyList): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'OPSS!',
        detail: 'Tente novamente!',
      });
      return;
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'DALE!',
        detail: 'Editado com Sucesso!',
      });
      movie.myRating = this.form.get('nota')?.value;
      movie.obs = this.form.get('obs')?.value;
      movie.progress = this.form.get('selectedProgressStatus')?.value.status;
  
      this.service.update(movie, movie.id!).subscribe(() => {
        this.list
          .filter((m) => m.id == movie.id)
          .forEach((film) => {
            film = movie;
          });
      });
      this.reset();
    }
  }

  remove(movie: MyList): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja remover esse filme?',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'DALE!',
          detail: 'Filme removido com sucesso!',
        });
        this.service.delete(movie.id!).subscribe(() => {
          this.list = this.list.filter((m) => m.id != movie.id);
        });
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
  
  reset(): void {
    this.form.reset();
  }
}