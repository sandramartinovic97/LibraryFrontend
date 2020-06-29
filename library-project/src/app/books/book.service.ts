import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable()
export class BookService {
    bookChanged = new BehaviorSubject<Book[]>(null);
    constructor(private httpClient: HttpClient) { }
    private books: Book[] = [];

    fetchBooks() {
        return this.httpClient.get<Book[]>('http://localhost:8083/books');
    }


    public getBookById(id: number) {
        console.log(id);
        const token = localStorage.getItem('token');
        return this.httpClient.get<Book>('http://localhost:8083/books/' + id, { headers: new HttpHeaders().set('Authorization', token) } );
    }
    public addBook(book: Book) {
        const token = localStorage.getItem('token');
        return this.httpClient.post('http://localhost:8083/books', book, { headers: new HttpHeaders().set('Authorization', token) });
      }

    public  updateBook(id: number, newBook: Book) {
      const token = localStorage.getItem('token');
      return this.httpClient.put('http://localhost:8083/books/' + id, newBook, { headers: new HttpHeaders().set('Authorization', token) });
      }

    public  deleteBook(id: number) {
      const token = localStorage.getItem('token');
      return this.httpClient.delete('http://localhost:8083/books/' + id, { headers: new HttpHeaders().set('Authorization', token) });

      }
}
