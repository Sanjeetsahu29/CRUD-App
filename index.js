const express = require('express');
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());



app.get('/',(req,res)=>{
    res.send("Hello from Node API");
})

app.use('/api/products',productRoute);

const port = process.env.PORT||2000;
app.listen(port,async()=>{
    try{
        await mongoose.connect(process.env.mongoDB_URI);
        console.log("Successfully Connected to Database")
        console.log("And Server is running on port : ",port)
    }catch(err){
        console.log("Failed to connect to Database - ",error.errorResponse.errmsg)
    }
})