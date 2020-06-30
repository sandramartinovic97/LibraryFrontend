import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { BookFavourites } from '../book-favourites/book-favourites.model';

@Injectable()
export class BookFavouritesService {

    listFavourites = new BehaviorSubject<BookFavourites>(null);

    constructor(private httpClient: HttpClient) { }

    public getAllFavourites() {
        return this.httpClient.get<BookFavourites[]>('http://localhost:8083/favouritebook');
    }

    public getFavouritesById(id: number) {
        return this.httpClient.get<BookFavourites>('http://localhost:8083/favouritebook/' + id);
    }

    public addFavouriteBook(favouriteBook: BookFavourites) {
        const token = localStorage.getItem('token');
        return this.httpClient.post('http://localhost:8083/favouritebook', favouriteBook, { headers: new HttpHeaders().set('Authorization', token) });
    }

    public getFavouriteByCustomerId(customerId: number) {
        const token = localStorage.getItem('token');
        return this.httpClient.get<BookFavourites[]>('http://localhost:8083/favouritebook/getFavouriteByCustomer?customerId=' + customerId,
            { headers: new HttpHeaders().set('Authorization', token) });
    }

    public deleteFavouriteBook(favouritebookId: number) {
        const token = localStorage.getItem('token');
        return this.httpClient.delete('http://localhost:8083/favouritebook/' + favouritebookId, { headers: new HttpHeaders().set('Authorization', token) });
    }

    public getFavouriteBookByCustomerIdAndBookId(customerId: number, bookId: number) {
        const token = localStorage.getItem('token');
        const httpParams = new HttpParams();
        httpParams.set("customerId", customerId.toString());
        httpParams.set("bookId", bookId.toString());
        if (token != null) {
            return this.httpClient.get<BookFavourites>('http://localhost:8083/favouritebook/getFavouriteByCustomerAndBook?'+"customerId=" + customerId + "&bookId=" + bookId, { headers: new HttpHeaders().set('Authorization', token)})
        }
    }
}