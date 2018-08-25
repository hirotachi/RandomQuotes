var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
//APP SETUP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


//ROUTES
app.get("/", function (req, res) {
    res.render("index");
});






//SERVER SETUP

app.listen(3000, function () {
    console.log("Server started");
});
