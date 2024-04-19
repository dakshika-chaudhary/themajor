const mongoose = require("mongoose");
const initData = require("../models/data .js"); 
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://dakshika:Project@12344@cluster0.wvabpjk.mongodb.net"

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to the database");
    await initDB();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

main();
