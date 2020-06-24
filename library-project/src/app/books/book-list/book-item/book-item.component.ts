import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(pageName: string, id: number) {
    this.router.navigate([`${pageName}`, id]);
  }
}