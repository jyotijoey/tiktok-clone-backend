import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./db.Model.js";



//app config
const app = express();
const PORT= 9000;

//middleware

//db config
const connectionURL= process.env.KEY;

mongoose.connect(connectionURL, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//api endpoints


app.get("/", (req,res)=>{
    res.status(200).send("hello world");
});

app.post("/v2/posts", (req, res) => {
    const dbVideos= req.body;

    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.get("/v1/posts", (req, res) => {
    res.status(200).send(Data);
});

app.listen(PORT, () => {
    console.log("server up and running at", PORT);
});