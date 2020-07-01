import Book = require("../dataaccess/mongoose/Book");
import BookRepository = require("../dataaccess/repository/BookRepository");

class BookService {
    public apiUrl = "https://fakerestapi.azurewebsites.net/api/Books";

    private bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    public createBookData(book: Book, callback: (error: any, response: any) => void) {
        this.bookRepository.create(book, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getBookById(bookId: any, callback: (error: any, response: any) => void) {
        this.bookRepository.retrieveById(bookId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllBookData(callback: (error: any, response: any) => void) {
        this.bookRepository.retrieve({}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public updateBookData(bookId: any, updatedBook: Book, callback: (error: any, response: any) => void) {
        const updateQuery = { _id : bookId };
        this.bookRepository.update(updateQuery, updatedBook, {new: true}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public deleteBookById(bookId: any, callback: (error: any, response: any) => void) {
        const updateQuery = { _id : bookId };
        this.bookRepository.deleteById(updateQuery, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }
}

Object.seal(BookService);
export = BookService;
