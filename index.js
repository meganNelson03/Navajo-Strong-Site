require("dotenv").config();

const express = require("express"),
      bodyparser = require("body-parser"),
      redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
      app = express();

const PORT = process.env.PORT || 5000;

//....APP CONFIG......
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

//....ROUTES..........
app.get("/", (req, res) => {
    res.render("index", {FORMSPRING_ID: process.env.FORMSPRING_ID, GOOGLE_TAG_ID: process.env.GOOGLE_TAG_ID});
});

app.get("/about", (req, res) => {
    res.render("about", {GOOGLE_TAG_ID: process.env.GOOGLE_TAG_ID});
});

app.get("/in-the-news", (req, res) => {
    res.render("media", {GOOGLE_TAG_ID: process.env.GOOGLE_TAG_ID});
})

app.get("/*", (req, res) => {
    res.render("error", {GOOGLE_TAG_ID: process.env.GOOGLE_TAG_ID});
})


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
})