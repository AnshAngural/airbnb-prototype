const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    url: String,
    filename: String
});

const listingSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: [imageSchema],       // array of objects
    location: String,           // city or area
    country: String             // country
});

module.exports = mongoose.model("Listing", listingSchema);
