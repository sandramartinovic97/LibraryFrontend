import { User } from '../auth/user.model';

export class BookOrder {
  public id: number;
  public orderDate: Date;
  public orderStatus: string;
  public orderPrice: number;
  public customerDto: User;

  constructor(orderDate: Date, orderStatus: string, orderPrice: number, customerDto: User) {
      this.orderDate = orderDate;
      this.orderStatus = orderStatus;
      this.orderPrice = orderPrice;
      this.customerDto = customerDto;
  }

}
