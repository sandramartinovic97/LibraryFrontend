import { Book } from '../books/book.model';

export class OrderItem {
  public id: number;
  // za sad nista
  // public bookOrder: string;
  public book: Book;
  public itemPrice: number;
  public itemQuantity: number;
  public customerId: number;

  constructor(book: Book, itemPrice: number, itemQuantity: number, customerId: number) {
      this.book = book;
      this.itemPrice = itemPrice;
      this.itemQuantity = itemQuantity;
      this.customerId = customerId;
  }

}
