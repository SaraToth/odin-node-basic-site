const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getBookById = asyncHandler(async (req, res) => {
    const { bookId } = req.params;

    const book = await db.getBookById(Number(bookId));

    if(!book) {
        throw new CustomNotFoundError("Book not found");
    }

    res.send(`Book Title: ${book.title}`);
})

module.exports = { getBookById };