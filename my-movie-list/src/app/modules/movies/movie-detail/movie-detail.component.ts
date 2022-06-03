import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MyList } from 'src/app/core/models/mylist.model';
import { MylistService } from 'src/app/core/services/mylist/mylist.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  
  movie!: Movie;

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

  constructor(private route: ActivatedRoute, private service: MovieService, private location: Location, private listService: MylistService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== undefined && id !== null) {
      this.service.getById(parseInt(id)).subscribe((data) => {this.movie = data});
    }
  }

  addToList(): void {
    const id = this.route.snapshot.paramMap.get('id');

  //   if (id !== undefined && id !== null) {
  //     this.service.getById(parseInt(id)).subscribe((data) => {
        
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'DALE!',
  //         detail: 'Adicionado a sua lista!',
  //       });

  //       let newId = this.list.id;
  //       this.list = data;
  //       this.list.id = newId;

  //       this.listService.add(this.list).subscribe(() => {});
  //     });
  //   }
  // }
  }
}
