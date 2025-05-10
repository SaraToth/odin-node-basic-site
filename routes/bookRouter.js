const { Router } = require("express");

const bookRouter = Router();

// Where / will equal /books/
bookRouter.get("/", (req, res) => res.send("all books"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
});
bookRouter.get("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`Reserve Book ID: ${bookId}`);
})

bookRouter.post("/:bookId/reserve", (req, res) => res.send("posted reserve book"));

module.exports = bookRouter;