import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Book } from 'src/app/book.interface';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { 

  }

  getBooks() {
    return this.httpClient.get(`${environment.apiURL}books/`);
  }

  addBook(book) {
    return this.httpClient.post(`${environment.apiURL}books/`, book);
  }
}
