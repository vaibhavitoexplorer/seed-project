import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Book } from 'src/app/book.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

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
  selection = new SelectionModel<any>(true, []);

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
      .subscribe((books: Book[]) => {
        this.books = new MatTableDataSource<Book>(books);
        this.books.paginator = this.paginator;
      });
  }

  addBook(): void {
    this.bookService.addBook(this.addBook)
      .subscribe(books => { 
        this.books = books
      },() => {
        console.log("call is completed");
      });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.books.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.books.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ID + 1}`;
  }

}