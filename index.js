
var cors = require("cors")
const express = require("express");
const app = express();

app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 4000

app.listen(port , () => {



    app.get('/' , (req,res) => {
        res.send("Hello World")
    })


    app.get('/get' , (req,res) => {
        res.send([ {name : "mehdi"}, {name :  "kumail"} , {name : "imran"} , {name : "baqir"} ])
    })



})