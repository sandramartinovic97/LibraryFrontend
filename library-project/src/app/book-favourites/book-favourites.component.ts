import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../books/book.service';
import { BookFavouritesService } from './book-favourites.service';
import { Book } from '../books/book.model';
import { BookFavourites } from './book-favourites.model';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../auth/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book-favourites',
  templateUrl: './book-favourites.component.html',
  styleUrls: ['./book-favourites.component.css']
})
export class BookFavouritesComponent implements OnInit, OnDestroy {
  listOfBookFavourites: BookFavourites[] = [];
  loggedUser: User;
  userSubscription: Subscription;
  id: number;
  dataSource = new MatTableDataSource<BookFavourites>();

  displayedColumns: string[] = ['bookName'];

  constructor(private bookService: BookService,
    private bookFavouritesService: BookFavouritesService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user.subscribe(loggedClient => {

      if (loggedClient) {
        this.loggedUser = loggedClient;
        this.bookFavouritesService.getFavouriteByCustomerId(this.loggedUser.id).subscribe( response => {

        this.listOfBookFavourites = response;
          
        this.dataSource.data = this.listOfBookFavourites;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe;
  }
}