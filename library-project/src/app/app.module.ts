import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookService } from './books/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    BookItemComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
