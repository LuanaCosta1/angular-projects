import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  public getById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  public add(request: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, request);
  }

  public update(request: Movie, id: number): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, request);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  public list(): Observable<{ id: number, title: string}[]> {
    return this.http
            .get<any[]>(this.apiUrl)
            .pipe(
                map(apiData => {
                    return apiData.map(d => {
                        return {
                            id: d.id,
                            title: d.title
                        };
                    });
                })
            );
  }
}
