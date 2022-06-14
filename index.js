

const express = require("express");
const app = express();


const port = process.env.PORT || 4000

app.listen(port , () => {



    app.get('/' , (req,res) => {
        res.send("Hello World")
    })


    app.get('/get' , (req,res) => {
        res.send([ {name : "mehdi"}, {name :  "kumail"} , {name : "imran"} , {name : "baqir"} ])
    })



})