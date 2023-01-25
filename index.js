
var cors = require("cors")
const express = require("express");
const app = express();
const path = require("path")

const jwt = require("jsonwebtoken")
const axios = require("axios")
const cookieParser = require("cookie-parser")

var FCM = require("fcm-node")
var server_key = 'AAAAQz9cW7Y:APA91bG5dIsRtGAwHTpFdv9psk1Msi-RyjvWmbPHFZzaDhB5OmXq8yiR4_v6C44olqtKFk_nquw-pu_AWACZZneJNeveZGVPh4JkwvyrbFEO_9FQNQG11mDHWvHqLeY35EW9FK8vSM0C'

var fcm = new FCM(server_key)

app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 4000


app.set('view engine', 'ejs');

app.listen(port, () => {



    app.get('/', (req, res) => {
        res.send("Hello World")
    })
    app.use(express.static(path.join(__dirname + "/public")))





    app.post("/getFCM", (req, res) => {



        const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = `mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



        // console.log(req.body)


        // client.connect(err => {


        client.db("database0").collection("fcm").updateOne({ "token": Array }, { $push: { "token": req.body.fcmToken } })
            .then((ans) => res.send({ message: "registered", type: "success" }))
            .catch((err) => res.send(err))






    })







    app.get('/get', (req, res) => {
        res.send([{ name: "mehdi" }, { name: "kumail" }, { name: "imran" }, { name: "baqir" }])
    })



    app.get('/login', (req, res) => {


        const createToken = async () => {

            const token = await jwt.sign({ name: "syed amir hussain", age: 23 }, "mynameissyedmehdirazanaqvi")
            console.log(token)



            jwt.verify(token, "mynameissyedmehdirazanaqvi", function (err, decoded) { console.log(decoded.name) });


        }



        // res.cookie("jwt", "mehdiisawebdeveloper")



        // console.log (req.cookies) 


        createToken()
        res.send("running")





    })






})