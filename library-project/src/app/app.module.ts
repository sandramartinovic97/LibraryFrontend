import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FormsModule } from '@angular/forms';
import { BookOrderComponent } from './book-order/book-order.component';
import { OrderDialogComponent } from './book-order/order-dialog/order-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    BookItemComponent,
    AuthComponent,
    BookOrderComponent,
    OrderDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
