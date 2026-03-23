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
    country: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model("Listing", listingSchema);
