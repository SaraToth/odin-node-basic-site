const authors = [
    { id: 1, name: "Bryan", title: "Harry Potter" },
    { id: 2, name: "Christian", title: "The bible" },
    { id: 3, name: "Jason", title: "A christmas carol" },
];

const books = authors;

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
}

module.exports = { getAuthorById, getBookById };