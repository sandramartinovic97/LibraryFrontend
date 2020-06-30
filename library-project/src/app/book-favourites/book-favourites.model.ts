import { Book } from '../books/book.model';
import { User } from '../auth/user.model';

export class BookFavourites {
    public id: number;
    public bookDto: Book;
    public customerDto: User;

    constructor(book: Book, customer: User) {
        this.bookDto = book;
        this.customerDto = customer;
    }
}