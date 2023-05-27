const express = require('express')
const app = express()


const PORT = 7000;

app.listen(PORT, (req,res)=>{
    console.log(`Server started at port ${PORT}`);
})