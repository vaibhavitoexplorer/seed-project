import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
    console.log("inside init");
  }

  loadBooks(): void {
    let tempBooks: Book;
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

}
