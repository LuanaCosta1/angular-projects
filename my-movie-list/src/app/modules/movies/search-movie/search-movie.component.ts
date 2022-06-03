import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  movieFiltered: Array<{ id: number, title: string }> = [];
  filteredWord: string = '';
  value: string = '';

  movies!: Movie[];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    
    this.service.list().subscribe(data => this.movieFiltered = data);
  }

  getMovies(): void {
    this.service.getAll().subscribe(data => this.movies = data);
  }

}
