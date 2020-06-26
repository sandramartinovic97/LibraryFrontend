import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderItem } from './orderItem.model';

@Injectable()
export class OrderItemService {

  constructor(private httpClient: HttpClient) { }

  public addOrderItem(orderItem: OrderItem) {
    const token = localStorage.getItem('token');
    return this.httpClient.post('http://localhost:8083/items', orderItem, { headers: new HttpHeaders().set('Authorization', token) });
  }

}
