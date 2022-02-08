 //we can make it like this const express = require('express)
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/post.js';




const app = express();

app.use(bodyParser.json({limit:"30mb" ,extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended : true}));
app.use(cors());

app.use('/posts' ,postRoutes); //eveery routes in post.js is gonna start with post
//https://www.mogodb.com/cloud/atlas they  are going to host our database on  their cloud

const PORT =  process.env.PORT || 5000;
const CONNECTION_URL = 'mongodb+srv://JSmarion:0811040367@cluster0.md5i5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


// mongoose.connect('mongodb://localhost:27017/test')
mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT , ()=> console.log(`server running on port: ${PORT} `)))
    .catch((error)=> console.log(error.message));


