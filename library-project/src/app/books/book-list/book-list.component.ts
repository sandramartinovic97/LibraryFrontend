import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;

  constructor(private bookService: BookService,
              private router: Router) { }


  ngOnInit(): void {
    this.subscription = this.bookService.bookChanged.subscribe(
      (books: Book[]) =>
      this.books = books
    );
    this.bookService.fetchBooks().subscribe(books => {
      this.books = books;
    });
  }
  onNewBook() {
    this.router.navigate([`books`, `new`]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
