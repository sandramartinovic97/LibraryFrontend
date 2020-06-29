import { Book } from '../books/book.model';
import { BookOrder } from './bookOrder.model';

export class OrderItem {
  public id: number;
  public bookOrderDto: BookOrder;
  public bookDto: Book;
  public itemPrice: number;
  public itemQuantity: number;
  public customerId: number;

  constructor(bookOrder: BookOrder, book: Book, itemPrice: number, itemQuantity: number, customerId: number) {
      this.bookOrderDto = bookOrder;
      this.bookDto = book;
      this.itemPrice = itemPrice;
      this.itemQuantity = itemQuantity;
      this.customerId = customerId;
  }

}
