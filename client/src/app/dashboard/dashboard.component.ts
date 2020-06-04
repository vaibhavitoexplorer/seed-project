import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Book } from 'src/app/book.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Title', 'Description', 'PageCount', 'Excerpt'];
  books: any;
  addBookForm;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private bookService: BookService,
    private router: Router, private formBuilder: FormBuilder) {
    this.addBookForm = this.formBuilder.group({
      ID: '',
      Title: ''
    });
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks()
      .subscribe((books) => {
        this.books = new MatTableDataSource<Book>(books);
        this.books.paginator = this.paginator;
      });
  }

  addBook(): void {
    this.bookService.addBook(this.addBook)
      .subscribe(books => this.books = books);
  }

}
