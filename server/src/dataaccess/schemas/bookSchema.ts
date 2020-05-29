import {Schema} from "mongoose";
import Book = require("../mongoose/book");
import DataAccess = require("./../dataaccess");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class BookSchema {
    static get schema() {

        const book = new Schema({
                Description: {
                    type: String
                },
                Excerpt: {
                    type: String
                },
                ID: {
                    type: Number
                },
                PageCount: {
                    type: Number
                },
                Title: {
                    type: String
                }
            },
            {
                timestamps: true,
                versionKey: false
            });
        return book;
    }
}
const bookSchema = mongooseConnection.model<Book>("Book", BookSchema.schema);
export = bookSchema;
