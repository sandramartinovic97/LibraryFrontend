import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItem } from './orderItem.model';
import { OrderItemService } from './orderItem.service';
import { User } from '../auth/user.model';
import { UserService } from '../auth/user.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BookOrderService } from './bookOrder.service';
import { BookOrder } from './bookOrder.model';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.css']
})
export class BookOrderComponent implements OnInit, OnDestroy {

  orderItemByCustomer: OrderItem[] =  [];
  loggedUser: User;
  userSubscription: Subscription;
  dataSource = new MatTableDataSource<OrderItem>();

  listSubscription: Subscription;

  priceOfOrder = 0;

  displayedColumns: string[] = ['bookName', 'itemPrice', 'itemQuantity', 'priceForAll', 'deleteFromCart'];

  createOrder = false;
  @ViewChild('f') orderForm: NgForm;

  constructor( private orderItemService: OrderItemService,
               private userService: UserService,
               private toastMess: ToastrService,
               private bookOrderService: BookOrderService) { }

  ngOnInit(): void {

    this.userSubscription = this.userService.user.subscribe(loggedClient => {

      if (loggedClient) {
        this.loggedUser = loggedClient;
        this.orderItemService.getOrderItemsByCustomerId(this.loggedUser.id).subscribe( response => {

          for (const orderItem of response) {
            if (orderItem.bookOrderDto == null) {
              this.orderItemByCustomer.push(orderItem);
              this.priceOfOrder += orderItem.itemPrice;
            }
          }
          this.dataSource.data = this.orderItemByCustomer;
        });
      }
    });

    this.listSubscription = this.orderItemService.listOrderItem.subscribe( response => {
      this.dataSource.data = this.orderItemByCustomer;
    });
  }

  confirmOrder() {
    // otvara se forma za popunjavanje porudzbine
    if (this.orderItemByCustomer === []) {
      this.toastMess.info('You do not have book in shopping cart');
    }
    else {
      this.createOrder = true;
    }
  }
  // odustajanje od kreiranja porudzbine
  onClear() {
    this.createOrder = false;
    this.orderForm.reset();
  }

  // kreiranje porudzbine za kraj, ako ima knjiga u listi
  onSubmit(form: NgForm) {
    const value = form.value;

    this.bookOrderService.addBookOrder(new BookOrder(value.date, 'U procesu', this.priceOfOrder, this.loggedUser))
      .subscribe(response => {

        for (const orderItem of this.orderItemByCustomer) {
            orderItem.bookOrderDto = response;
            orderItem.bookOrderDto.customerDto = this.loggedUser;
            this.orderItemService.putOrderItem(orderItem.id, orderItem).subscribe( responseOrderItem => {
                console.log('Updated order item');
            });
        }

        this.onClear();
        this.orderItemByCustomer = [];
        this.priceOfOrder = 0;
        this.orderItemService.listOrderItem.next(null);
      });
  }


  // brisanje jedne kljige iz liste
  deleteOneFromCart(orderItem: OrderItem) {
    this.orderItemService.deleteOrderItem(orderItem.id).subscribe( response => {
      console.log('Deleted');
      this.orderItemByCustomer.splice(this.orderItemByCustomer.lastIndexOf(orderItem), 1);
      this.priceOfOrder -= orderItem.itemPrice;
      this.orderItemService.listOrderItem.next(orderItem);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.listSubscription.unsubscribe();
  }

}
