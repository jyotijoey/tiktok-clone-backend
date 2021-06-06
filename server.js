import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./db.Model.js";
import cors from "cors";


//app config
const app = express();
const PORT= process.env.PORT || 9000;

//middleware

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


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

app.get("/v2/posts", (req, res) => {
    Videos.find({},(err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.post("/v2/posts", (req, res) => {
    
    const defaultInput ={
    likes: "0",
    messages: "0",
    shares:"0"
    }
    const input= req.body;
    const post= {...input, ...defaultInput};
    console.log(req);

    // const dbVideos= req.body;
    // console.log(req);

    Videos.create(post, (err, data) => {
        if(err){
            res.status(500).send(err);
            console.log(err);
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