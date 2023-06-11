const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const route = require("./routes/upload");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8081

mongoose.connect("mongodb+srv://ganeshpendyala2000:nswCMvG0HAL7wjwY@cluster0.cyzikyo.mongodb.net/?retryWrites=true&w=majority")
    .then((response) => {
        console.log("Connected to Mango-DB")
    }).catch((error) => {
        console.log("Issue regarding the connecting with Mango-DB")
    })

//=========
app.use("/upload", route)

app.use((req, res) => {
    res.send("Welcome , Server is Active !")
});

app.listen(PORT)