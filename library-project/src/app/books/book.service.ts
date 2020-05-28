import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {
    constructor(private httpClient: HttpClient) { }
    private books: Book[] = [];

    fetchBooks() {
        return this.httpClient.get<Book[]>('http://localhost:8083/books');
    }
}
