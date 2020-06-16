const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const routes = require("./routes/paint");
routes(app);

app.listen(3000, "127.0.0.1");
