require("dotenv").config();

const express = require("express"),
      bodyparser = require("body-parser"),
      app = express();

const PORT = process.env.PORT || 5000;

//....APP CONFIG......
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//....ROUTES..........
app.get("/", (req, res) => {
    res.render("index", {FORMSPRING_ID: process.env.FORMSPRING_ID});
});

app.get("/about", (req, res) => {
    res.render("about");
});


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
})