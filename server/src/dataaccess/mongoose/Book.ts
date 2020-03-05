import * as mongoose from "mongoose";
import bookModel = require("./../models/book");

interface IBook extends bookModel, mongoose.Document {
    _id: string;
}
export = IBook;
