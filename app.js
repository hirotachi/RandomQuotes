var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");
//APP SETUP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


//ROUTES
app.get("/", function (req, res) {
    res.redirect("/randomizer");
});

app.get("/randomizer", function (req, res) {
    request("https://talaikis.com/api/quotes/random/", function(error, response, body){
        var quote = JSON.parse(body);
        res.render("index", {quote: quote});
    });
});






//SERVER SETUP

app.listen(3000, function () {
    console.log("Server started");
});
