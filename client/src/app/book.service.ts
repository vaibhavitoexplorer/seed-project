import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from "rxjs/operators";

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { 

  }

  getBooks(): any {
    return this.httpClient.get(`${environment.apiURL}books/`).pipe(map((response: any) => response));
  }

  addBook(book): any {
    return this.httpClient.post(`${environment.apiURL}books/`, book).pipe(map((response: any) => response));
  }
}
