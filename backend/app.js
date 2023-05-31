require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 7000;

// Middlewares :- app.use(MiddleWare_Name)
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


//COMMENT : MongoDb Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log(' -- DB CONNECTED -- '))
    .catch((err) => console.log(err))
//NOTE : Connecting Functions :  

app.listen(PORT, (req, res) => {
    console.log(` Server started at port ${PORT}`);
})