const { Router } = require("express");
const { getBookById } = require("../controllers/bookController");

const bookRouter = Router();

// Where / will equal /books/
bookRouter.get("/", (req, res) => res.send("all books"));
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`Reserve Book ID: ${bookId}`);
})

bookRouter.post("/:bookId/reserve", (req, res) => res.send("posted reserve book"));

module.exports = bookRouter;