import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book: Book;
  books: Book[];
  isAdminLoggedIn: boolean;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      this.id = parseInt(params.get('id'));
      this.bookService.getBookById(this.id).subscribe(book => {
        this.book = book;
      });
    });

    this.userService.getLoggedInUser().subscribe( user =>
      {
        if(user != null) {
          if(user.roleDto.role == "admin") {
            this.isAdminLoggedIn = true;
  
          }
          else 
          {
            this.isAdminLoggedIn = false;
  
          }
        }
      
      }
      );
  }
  onEditBook() {
    this.router.navigate([`details`, this.id, `edit`]);
  }

  onDeleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe( a => {
      this.bookService.fetchBooks().subscribe( 
        (book: Book[]) => {
          this.books = book;
          this.bookService.bookChanged.next(book);
          this.router.navigate(['/books']);
  
        }
        );
      });
 
  }
}
