const { Router } = require("express");

const bookRouter = Router();

// Where / will equal /books/
bookRouter.get("/", (req, res) => res.send("all books"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
});

module.exports = bookRouter;