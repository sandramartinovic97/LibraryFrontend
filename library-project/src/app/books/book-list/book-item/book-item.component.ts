import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Book } from '../../book.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../../../book-order/order-dialog/order-dialog.component';
import { OrderItem } from '../../../book-order/orderItem.model';
import { UserService } from '../../../auth/user.service';
import { User } from '../../../auth/user.model';
import { OrderItemService } from '../../../book-order/orderItem.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit, OnDestroy {
  @Input() book: Book;

  // za dijalog i dodavanje orderItem
  itemQuantity: number;
  orderItemToAdd: OrderItem;
  loggedUser: User;
  subscription: Subscription;


  constructor(private router: Router,
              public dialog: MatDialog,
              private userService: UserService,
              private orderItemService: OrderItemService) { }

  ngOnInit(): void {
    this.subscription = this.userService.user.subscribe(loggedClient => {

      if (loggedClient) {
        this.loggedUser = loggedClient;
      }
    });
  }

  goToDetails(pageName: string, id: number) {
    this.router.navigate([`${pageName}`, id]);
  }

  addToCart(book: Book) {
    {

      const dialogRef = this.dialog.open(OrderDialogComponent, {
        width: '250px',
        data: {itemQuantity: this.itemQuantity}
      });

      dialogRef.afterClosed().subscribe(itemQuantityDialog => {
        this.itemQuantity = itemQuantityDialog;

        if (this.loggedUser != null && this.itemQuantity != null) {
          this.orderItemToAdd = new OrderItem (null, book, book.bookPrice * itemQuantityDialog, itemQuantityDialog, this.loggedUser.id);
          this.orderItemService.addOrderItem(this.orderItemToAdd).subscribe(response => {
            console.log(this.orderItemToAdd);
          });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
