const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = 7000;

//COMMENT : MongoDb Connection
mongoose
    .connect('mongodb://localhost:27017/tshirt', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.log(err))
//NOTE : Connecting Functions :  

app.listen(PORT, (req, res) => {
    console.log(` Server started at port ${PORT}`);
})