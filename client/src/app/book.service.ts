import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL: string = "http://localhost:8080/api/books/";

  constructor(private httpClient: HttpClient) { 

  }

  /* getBooks(){
    return this.httpClient.get(this.apiURL);
  } */

  getBooks(): any {
    return this.httpClient.get(this.apiURL).pipe(map((response: any) => response));
  }

  addBook(book): any {
    return this.httpClient.post(this.apiURL, book).pipe(map((response: any) => response));
  }
}
