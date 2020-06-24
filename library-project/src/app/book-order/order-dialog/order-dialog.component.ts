import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public itemQuantity: number) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(itemQuantity): void {
    console.log(itemQuantity);
    this.dialogRef.close(itemQuantity);
  }

}
