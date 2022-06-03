import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from 'src/models/pizza.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl = 'http://localhost:3000/pizzas';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }

  public getById(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/${id}`);
  }

  public add(request: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.apiUrl, request);
  }

  public update(request: Pizza, id: number): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.apiUrl}/${id}`, request);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
