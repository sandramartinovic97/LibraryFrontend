import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.css']
})
export class BookOrderComponent implements OnInit {

  //dataSource = new MatTableDataSource<ArticleAmount>();
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['bookName', 'itemPrice', 'itemQuantity', 'deleteFromCart'];

  createOrder = false;
  @ViewChild('f') orderForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  confirmOrder() {
    // otvara se forma za popunjavanje porudzbine
    this.createOrder = true;
  }
  // odustajanje od kreiranja porudzbine
  onClear() {
    this.createOrder = false;
    this.orderForm.reset();
  }

  // kreiranje porudzbine za kraj, ako ima knjiga u listi
  onSubmit(form: NgForm) {

  }

  // brisanje svega iz liste
  onDeleteAll() {

  }

  // brisanje jedne kljige iz liste
  deleteOneFromCart() {

  }

}
