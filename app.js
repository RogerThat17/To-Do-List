// jshint esversion: 6

const express = require('express');

const bodyParser = require('body-parser');

const date = require(__dirname + "/date.js");



const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var itemList = [];

var workList = [];

app.get("/", function(request, response) {
    var day = date.getDate();

    response.render("list", {listType: day, newItem: itemList});
});

app.post("/", function(request, response) {

    var item = request.body.newItem;

    if(request.body.list === "Work List") {

        if(item != "") {
            workList.push(item);

            response.redirect("/work");
        }
        else {
            response.redirect("/work");
        }

    }
    else {

        if(item != "") {
            itemList.push(item);

            response.redirect("/");
        }
        else {
            response.redirect("/");
        }
    }
});

app.post("/delete", function(request, response) {

    var obj = request.body.obj;

    obj = obj.split(",");

    var list_type = obj[0];

    var item = obj[1];

    if (list_type === "Work List") {
        workList.splice(workList.indexOf(item), 1);

        response.redirect("/work");
    }
    else {
        itemList.splice(itemList.indexOf(item), 1);

        response.redirect("/");
    }
});

app.get("/work", function(request, response) {
    response.render("list", {listType: "Work List", newItem: workList});
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running at port 3000");
});