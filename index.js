const mongoose = require("mongoose");
const initData = require("../models/data.js"); 
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/themajordb";

main()
  .then(() => {
    console.log("The database is connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
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

(async () => {
  await initDB();
})();
