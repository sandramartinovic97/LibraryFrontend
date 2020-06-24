import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../../../book-order/order-dialog/order-dialog.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  // za dijalog
  itemQuantity: number;

  constructor(private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToDetails(pageName: string, id) {
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
        // za sad samo ispisem a posle cemo uraditi sa njom sta treba
        console.log(this.itemQuantity);
      });
    }
  }
}
