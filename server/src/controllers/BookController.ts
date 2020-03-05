import * as express from "express";
import BookService = require("../service/BookService");

class BookController {
    private localBookService: BookService;
    constructor() {
        this.localBookService = new BookService();
    }

    public createBook(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const book = req.body;
            const bookService = new BookService();
            bookService.createBookData(book, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating Book Data : ", e);
        }
    }

    public getBookById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const bookService = new BookService();
            const bookId = req.params.id;
            bookService.getBookById(bookId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in getting all Book Data . ", e);
        }
    }

    public getAllBooks(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const bookService = new BookService();
            bookService.getAllBookData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in getting all Book Data . ", e);
        }
    }

    public updateBook(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const bookId = req.params.id;
            const updateBody = req.body;
            const bookService = new BookService();
            bookService.updateBookData(bookId, updateBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in updating Book Data : ", e);
        }
    }

    public deleteBookById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const bookId = req.params.id;
            const bookService = new BookService();
            bookService.deleteBookById(bookId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in deleting Book by Id : ", e);
        }
    }
}

export = BookController;
