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
<<<<<<< HEAD

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }
=======
  books: Book[];
  
  constructor(private bookService: BookService,
             private route: ActivatedRoute,
             private router: Router) { }
>>>>>>> bed8ab19096cc5c766da85891bd768dd5cb360ad

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
<<<<<<< HEAD
}
=======
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
>>>>>>> bed8ab19096cc5c766da85891bd768dd5cb360ad
