import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT= 9000;

app.get("/", (req,res)=>{
    res.status(200).send("hello world");
});

app.listen(PORT, () => {
    console.log("server up and running at", PORT);
});