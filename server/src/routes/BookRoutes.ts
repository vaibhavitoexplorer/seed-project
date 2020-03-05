import express = require("express");
import BookController = require("../controllers/BookController");
const router = express.Router();

class BookRoutes {

    private bookController: BookController;

    constructor() {
        this.bookController = new BookController();
    }

    get routes(): express.Router {
        router.post("/", this.bookController.createBook);
        router.get("/", this.bookController.getAllBooks);
        router.get("/:id", this.bookController.getBookById);
        router.put("/:id", this.bookController.updateBook);
        router.delete("/:id", this.bookController.deleteBookById);
        return router;
    }
}

Object.seal(BookRoutes);
export = BookRoutes ;
