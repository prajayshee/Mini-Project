const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./signup.html"));

});

app.get("/signup",(req,res)=>{
    mongoose.connect("mongodb://localhost/signup")
    .then(()=>{
        console.log("connected");
    }).catch(error=>console.log(error));
    
});


app.listen(8000);

