require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});


const PORT = 3000;
app.listen(PORT, () => {
})
