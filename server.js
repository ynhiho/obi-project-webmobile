const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const urls = require("./routes/api/urls");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/urls", urls);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
