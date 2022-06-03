import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Movie } from 'src/app/core/models/movie.model';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { StarsRatingPipe } from '../shared/pipes/stars-rating.pipe';
import { FilterTitlePipe } from '../shared/pipes/filter-title.pipe';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieAddComponent} from './movie-add/movie-add.component'
import { SearchMovieComponent } from './search-movie/search-movie.component';

import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    SearchMovieComponent,
    MovieAddComponent,
    StarsRatingPipe,
    DurationPipe,
    FilterTitlePipe,
    SearchMovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    RatingModule,
    ChipModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    AccordionModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class MoviesModule { }
