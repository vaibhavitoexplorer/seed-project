import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('signInFormRef', { static: true }) signInFormRef: NgForm;

  constructor() { 
    console.log("inside the con");
  }

  ngOnInit() {
  }
  
}
