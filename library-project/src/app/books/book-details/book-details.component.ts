import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      this.id = parseInt(params.get('id'));
      this.bookService.getBookById(this.id).subscribe(book => {
        this.book = book;
        console.log(book);
      });
    });
  }
}
