import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookService.fetchBooks().subscribe(books => {
      this.books = books;
    });
  }
  onNewBook() {
    this.router.navigate([`books`, `new`]);
  }

}
