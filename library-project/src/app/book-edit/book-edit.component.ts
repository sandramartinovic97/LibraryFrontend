import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../books/book.model';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id: number;
  editMode = false;
  bookForm: FormGroup;
  books: Book[];
  


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
        console.log(this.id);
        console.log(this.editMode);

      }
    );

  }
  private initForm() {

    let bookTitle = '';
    let bookImage = '';
    let bookPrice;
    let bookAuthor = '';
    let bookDescription = '';
    let bookPublisher = '';
    let bookLanguage = '';
    let bookYear;
    let bookQuantity;

    if (this.editMode) {
      
       this.bookService.getBookById(this.id).subscribe( GETbook => {
         console.log(GETbook);
         const book = GETbook;
         bookTitle = book.bookName;
         bookImage = book.bookCover;
         bookPrice = book.bookPrice;
         bookAuthor = book.bookAuthor;
         bookDescription = book.bookDescription;
         bookPublisher = book.bookPublisher;
         bookLanguage = book.bookLanguage;
         bookYear = book.bookYear;
         bookQuantity = book.bookQuantity;


 
         this.bookForm = new FormGroup({
           name: new FormControl(bookTitle, Validators.required),
           imageURL: new FormControl(bookImage, Validators.required),
           price: new FormControl(bookPrice, Validators.required),
           author: new FormControl(bookAuthor, Validators.required),
           desc: new FormControl(bookDescription, Validators.required),
           publisher: new FormControl(bookPublisher, Validators.required),
           language: new FormControl(bookLanguage, Validators.required),
           year: new FormControl(bookYear, Validators.required),
           quantity: new FormControl(bookQuantity, Validators.required)


 
         });
       });
      }
      this.bookForm = new FormGroup({
        name: new FormControl(bookTitle, Validators.required),
        imageURL: new FormControl(bookImage, Validators.required),
        price: new FormControl(bookPrice, Validators.required),
        author: new FormControl(bookAuthor, Validators.required),
        desc: new FormControl(bookDescription, Validators.required),
        publisher: new FormControl(bookPublisher, Validators.required),
        language: new FormControl(bookLanguage, Validators.required),
        year: new FormControl(bookYear, Validators.required),
        quantity: new FormControl(bookQuantity, Validators.required)

      });
  
    
 

  }
  onSubmit(){
    const newBook = new Book(
      this.bookForm.value.name,
      this.bookForm.value.author,
      this.bookForm.value.desc,
      this.bookForm.value.publisher,
      this.bookForm.value.language,
      this.bookForm.value.year,
      this.bookForm.value.price,
      this.bookForm.value.quantity,
      this.bookForm.value.imageURL
    );
    if (this.editMode) {
      this.bookService.updateBook(this.id, newBook).subscribe(
        a => {
          this.bookService.fetchBooks().subscribe(
            (books: Book[]) => {
              this.bookService.bookChanged.next(books);
            }
          );
         this.onCancel();

        }
      );
    
 
    } else {
       console.log(newBook);
       this.bookService.addBook(newBook).subscribe(
        a => {
          this.bookService.fetchBooks().subscribe(
            (books: Book[]) => {
              this.bookService.bookChanged.next(books);
            }
          );
          this.onCancel();

        }
       );
    }
  
    
  
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
    // Implementiran je ActivatedRoute tako da ova linija koda vraca na jednu rutu unazad u odnosu natrenutno aktivnu
  }
}
