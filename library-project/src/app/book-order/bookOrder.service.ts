import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BookOrder } from './bookOrder.model';

@Injectable()
export class BookOrderService {

  constructor(private httpClient: HttpClient) { }

  public addBookOrder(bookOrder: BookOrder) {
    const token = localStorage.getItem('token');
    return this.httpClient.post<BookOrder>('http://localhost:8083/orders', bookOrder,
      { headers: new HttpHeaders().set('Authorization', token) });
  }


}
