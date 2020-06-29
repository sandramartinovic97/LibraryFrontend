import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { OrderItem } from './orderItem.model';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class OrderItemService {

  listOrderItem = new BehaviorSubject<OrderItem>(null);

  constructor(private httpClient: HttpClient) { }

  public addOrderItem(orderItem: OrderItem) {
    const token = localStorage.getItem('token');
    return this.httpClient.post('http://localhost:8083/items', orderItem, { headers: new HttpHeaders().set('Authorization', token) });
  }

  public getOrderItemsByCustomerId(customerId: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<OrderItem[]>('http://localhost:8083/items/getItemByCustomer?customerId=' + customerId,
               { headers: new HttpHeaders().set('Authorization', token) });
  }

  public deleteOrderItem(orderItemId: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete('http://localhost:8083/items/' + orderItemId, { headers: new HttpHeaders().set('Authorization', token) });
  }

  public putOrderItem(orderItemId: number, orderItem: OrderItem) {
    const token = localStorage.getItem('token');
    return this.httpClient.put('http://localhost:8083/items/' + orderItemId, orderItem,
      { headers: new HttpHeaders().set('Authorization', token) });
  }


}
