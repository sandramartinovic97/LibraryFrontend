export class Book {
    public id: number;
    public bookName: string;
    public bookAuthor: string;
    public bookDescription: string;
    public bookPublisher: string;
    public bookLanguage: string;
    public bookYear: number;
    public bookPrice: number;
    public bookQuantity: number;
    public bookCover: string;

    constructor(bookName: string,
                bookAuthor: string,
                bookDescription: string,
                bookPublisher: string,
                bookLanguage: string,
                bookYear: number,
                bookPrice: number,
                bookQuantity: number,
                bookCover: string) {
        this.bookName = bookName,
        this.bookAuthor = bookAuthor,
        this.bookDescription = bookDescription,
        this.bookPublisher = bookPublisher,
        this.bookLanguage = bookLanguage,
        this.bookYear = bookYear,
        this.bookPrice = bookPrice,
        this.bookQuantity = bookQuantity,
        this.bookCover = bookCover;

    }

}
