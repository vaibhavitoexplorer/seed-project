import BookSchema = require("../schemas/BookSchema");
import Book = require("./../mongoose/book");

import RepositoryBase = require("./base/repository.base");

class BookRepository extends RepositoryBase<Book> {

  constructor() {
    super(BookSchema);
  }

}

Object.seal(BookRepository);
export = BookRepository;
