require("dotenv").config();

const express = require("express"),
      bodyparser = require("body-parser"),
      app = express();

const PORT = process.env.PORT || 5000;

//....APP CONFIG......
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));

//....ROUTES..........
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {

});


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
})