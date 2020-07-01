import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { executeForTest } from 'dr-books-module';
import { bookController } from 'dr-books-module';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {

  }

  getBooks() {
    let test = new bookController();
    //test.getAllBooks();
    return this.httpClient.get(`${environment.apiURL}books/`);
  }

  addBook(book) {
    return this.httpClient.post(`${environment.apiURL}books/`, book);
  }
}
