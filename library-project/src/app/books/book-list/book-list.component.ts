import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;
  genres: Genre[];
  isAdminLoggedIn: boolean;

  constructor(private bookService: BookService,
     private router: Router,
     private genreService: GenreService, 
     private toastrService: ToastrService,
     private userService: UserService) { }


  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(genres => {
      this.genres = genres;
    })
    this.subscription = this.bookService.bookChanged.subscribe(
      (books: Book[]) =>
        this.books = books
    );
    this.bookService.fetchBooks().subscribe(books => {
      this.books = books;
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
  onNewBook() {
    this.router.navigate([`books`, `new`]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeGenre(value) {
    this.bookService.getBookByGenreId(value).subscribe(books => {
      this.books = books;
    }, error => {
      this.toastrService.error("Could not find book with selected genre", "Error");
    })
  }

  noGenreSelected() {
    this.bookService.fetchBooks().subscribe(books=> {
      this.books = books;
    })
  }

}
