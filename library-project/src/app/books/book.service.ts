import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {
    constructor(private httpClient: HttpClient) { }
    private books: Book[] = [];

    fetchBooks() {
        return this.httpClient.get<Book[]>('http://localhost:8083/books');
    }

    public getBookById(id: number) {
        console.log(id);
        const headers = new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<Book>('http://localhost:8083/books/'+id, {headers});
    }
}