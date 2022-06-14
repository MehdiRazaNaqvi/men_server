const express = require("express");
const app = express();


const port = process.env.PORT || 4000
app.listen(3000 , () => {



    app.get('/' , (req,res) => {
        res.send("Hello World Lyari")
    })


    app.get('/get' , (req,res) => {
        res.send("Data here")
    })



})