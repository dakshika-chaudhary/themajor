const express = require('express');
const app = express();
const Listing = require("./models/listing.js");
const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://dakshika:Project@12344@cluster0.wvabpjk.mongodb.net/test"

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

main();

app.get("/", (req, res) => {
    res.send("Hi, browser is connected");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

app.get("/testlisting", async (req, res) => {
    try {
        let sampleListing = new Listing({
            title: "My New Villa",
            description: "By the Beach",
            price: 1200,
            location: "Pune",
            country: "India"
        });

        await sampleListing.save();
        console.log("Sample data saved successfully");
        res.send("Successfully saved the sample data");
    } catch (error) {
        console.error("Error saving sample data:", error);
        res.status(500).send("Error saving sample data");
    }
});
