import * as express from "express";
import BookRoutes = require("./BookRoutes");
import UserRoutes = require("./UserRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/users/", new UserRoutes().routes);
        app.use("/api/books/", new BookRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
