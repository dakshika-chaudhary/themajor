const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
title:{
type:String,
required:true,
},
description:String,
image:{
    type:String,
    default:"https://unsplash.com/photos/a-person-sitting-on-a-bench-in-a-courtyard-VJMwvgB0QiE",
set:(v)=>v===""?"https://unsplash.com/photos/a-person-sitting-on-a-bench-in-a-courtyard-VJMwvgB0QiE":v,
},
price:Number,
location:String,
country:String,

});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;