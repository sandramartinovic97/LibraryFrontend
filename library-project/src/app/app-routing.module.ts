import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookFavouritesComponent } from './book-favourites/book-favourites.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'shoppingCart', component: BookOrderComponent },
  { path: 'details/:id', component: BookDetailsComponent },
  { path: 'books/new', component: BookEditComponent },
  { path: 'details/:id/edit', component: BookEditComponent },
  { path: 'favourites', component: BookFavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
