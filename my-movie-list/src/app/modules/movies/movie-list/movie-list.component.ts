import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { MyList } from 'src/app/core/models/mylist.model';
import { MylistService } from 'src/app/core/services/mylist/mylist.service';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { FilterService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Progress } from 'src/app/core/models/progess.model';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies!: Movie[];

  starsRating!: number;

  list: MyList = {
    id: 0,
    title: '',
    duration: 0,
    year: 0,
    rating: 0,
    description: '',
    director: '',
    stars: [],
    poster: '',
    myRating: 0,
    obs: '',
    progress: '',
  };

  mylist!: MyList[];

  form!: FormGroup;

  progress!: Progress[];
  selectedProgressStatus!: Progress;

  displayResponsive!: boolean;
  
  movieFiltered: Array<{ id: number, title: string }> = [];
  filteredWord: string = '';
  value: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: MovieService,
    private listService: MylistService,
    private messageService: MessageService,
    private location: Location,
    private filterService: FilterService,
    private formBuilder: FormBuilder
  ) {
    this.progress = [
      { status: 'Não assisti' },
      { status: 'Em andamento' },
      { status: 'Já terminei :)' },
      { status: 'Não terminei' },
    ];
  }

  ngOnInit(): void {
    this.getMovies();
    this.service.list().subscribe(data => this.movieFiltered = data);
  }

  getMovies(): void {
    this.service.getAll().subscribe((movies) => {
      this.movies = movies;
    });

    this.form = this.formBuilder.group({
      nota: new FormControl(undefined),
      obs: new FormControl(''),
      selectedProgressStatus: new FormControl(''),
    });
  }

  addToList(id?: number): void {
    if (id !== undefined && id !== null) {
      this.service.getById(id).subscribe(() => {
        let selectedMovie = this.movies.filter((m) => m.id == id);

        this.list = selectedMovie[0];

        this.send();

        this.list.myRating = this.form.get('nota')?.value;
        this.list.obs = this.form.get('obs')?.value;
        this.list.progress = this.form.get('selectedProgressStatus')?.value.status;

        this.messageService.add({
          severity: 'success',
          summary: 'DALE!',
          detail: 'Adicionado a sua lista!',
        });

        this.listService.add(this.list).subscribe(() => {});
      });
    }

  }

  send(): any {
    this.displayResponsive = false;
    return this.form
  }

  showResponsiveDialog() {
    this.displayResponsive = true;
  }

  reset(): void {
    this.form.reset();
  }
  
  goBack(): void {
    this.location.back();
  }
}
