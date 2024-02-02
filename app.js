const express = require('express');
const itemsRouter = require('./routes/items');
const ExpressError = require("./expressError");
const app = express();

// Use express.json() middleware to parse incoming JSON requests
app.use(express.json());

// Use the itemsRouter for all routes under /items
app.use('/items', itemsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app
