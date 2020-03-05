const express = require("express");
const bodyParser = require("body-parser");

const products = require("./routes/api/products");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Use Routes
app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
