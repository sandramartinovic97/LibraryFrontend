import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
<<<<<<< HEAD
import { BookOrderComponent } from './book-order/book-order.component';
=======
import { BookEditComponent } from './book-edit/book-edit.component';
>>>>>>> bed8ab19096cc5c766da85891bd768dd5cb360ad

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'auth', component: AuthComponent },
<<<<<<< HEAD
  { path: 'shoppingCart', component: BookOrderComponent },
  { path: 'details/:id', component: BookDetailsComponent }
=======
  { path: 'details/:id', component: BookDetailsComponent },
  { path: 'books/new', component: BookEditComponent },
  { path: 'details/:id/edit', component: BookEditComponent }
>>>>>>> bed8ab19096cc5c766da85891bd768dd5cb360ad
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
