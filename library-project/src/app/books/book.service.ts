import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class BookService {
    bookChanged = new Subject<Book[]>();
    constructor(private httpClient: HttpClient) { }
    private books: Book[] = [];

    fetchBooks() {
        return this.httpClient.get<Book[]>('http://localhost:8083/books');
    }


    public getBookById(id: number) {
        console.log(id);
        return this.httpClient.get<Book>('http://localhost:8083/books/'+id);
    }
    public addBook(book: Book) {
        return this.httpClient.post('http://localhost:8083/books', book);
      }
    
      updateBook(id: number, newBook: Book) {
        return this.httpClient.put('http://localhost:8083/books/' + id, newBook);
      }
    
      deleteBook(id: number) {
        return this.httpClient.delete('http://localhost:8083/books/' + id);
    
      }
}