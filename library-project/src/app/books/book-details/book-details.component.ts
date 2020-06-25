import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book: Book;
  books: Book[];
  
  constructor(private bookService: BookService,
             private route: ActivatedRoute,
             private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      this.id = parseInt(params.get('id'));
      this.bookService.getBookById(this.id).subscribe(book => {
        this.book = book;
        console.log(book);
      });
    });
  }
  onEditBook(){
    this.router.navigate([`details`,this.id, `edit`]);
  }

  onDeleteBook(){
    this.bookService.deleteBook(this.book.id).subscribe(
      a => { this.bookService.bookChanged.next();
    });
    this.bookService.fetchBooks().subscribe(
      (book: Book[]) => {
        this.books = book;
      }
    );
    this.bookService.bookChanged.next(this.books);
    this.router.navigate(['/books']);
  }
}
