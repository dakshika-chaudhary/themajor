const express = require('express');
const app = express();
const Listing=require("./models/listing.js");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/themajordb');

//to connect the database
const MONGO_URL="mongodb://127.0.0.1:27017/themajordb";

main()
.then(()=>{
    console.log("the database is connected");
})

.catch((err)=>{
    console.log(err);
});


async function main() {
    await mongoose.connect(MONGO_URL);

}
//browser is connected-check
app.get("/",(req,res)=>{
    res.send("hi browser is connected");
});

//server is connected-check
app.listen(8080,()=>{
    console.log("the server is listening");
});

app.get("/testlisting",async(req,res)=>{
let samplelisting=new Listing({
title:"My New Villa",
description:"By the Beach",
price:1200,
location:"pune",
country:"India",
});

await samplelisting.save();
console.log("sample data is saved");
res.send("successfully saved the sample data");
});