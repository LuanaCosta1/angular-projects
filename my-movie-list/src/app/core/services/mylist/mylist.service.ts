import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyList } from '../../models/mylist.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MylistService {
  private apiUrl = 'http://localhost:3000/my-list';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<MyList[]> {
    return this.http.get<MyList[]>(this.apiUrl);
  }

  public getById(id: number): Observable<MyList> {
    return this.http.get<MyList>(`${this.apiUrl}/${id}`);
  }

  public add(request: MyList): Observable<MyList> {
    return this.http.post<MyList>(this.apiUrl, request);
  }

  public update(request: MyList, id: number): Observable<MyList> {
    return this.http.put<MyList>(`${this.apiUrl}/${id}`, request);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
