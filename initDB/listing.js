const mongoose = require("mongoose");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/sites";

// ⚠️ MUST BE A VALID USER ID FROM YOUR USERS COLLECTION
const OWNER_ID = "67f45109d4197579a8355c15"; 

// -------- SAMPLE DATA --------
const cities = [
    { city: "New York", country: "United States" },
    { city: "Toronto", country: "Canada" },
    { city: "Vancouver", country: "Canada" },
    { city: "Los Angeles", country: "United States" },
    { city: "Miami", country: "United States" },
    { city: "Paris", country: "France" },
    { city: "Rome", country: "Italy" },
    { city: "Barcelona", country: "Spain" },
    { city: "Dubai", country: "UAE" },
    { city: "Tokyo", country: "Japan" }
];

const titles = [
    "Luxury Apartment",
    "Cozy Studio",
    "Modern Loft",
    "Beachfront Villa",
    "Mountain Retreat",
    "City Center Condo",
    "Peaceful Cottage",
    "Urban Stay",
    "Stylish Home",
    "Comfortable Suite"
];

const images = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb"
];

// -------- HELPER --------
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const randomPrice = () => Math.floor(Math.random() * 3000) + 800;

// -------- SEED FUNCTION --------
async function seedDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB Connected");

        // 🔥 DELETE OLD DATA
        await Listing.deleteMany({});
        console.log("Old listings removed");

        const listings = [];

        for (let i = 0; i < 50; i++) {
            const place = randomItem(cities);

            listings.push({
                title: `${randomItem(titles)} in ${place.city}`,
                description:
                    "A beautiful place to stay with all modern amenities. Perfect for travelers and professionals.",
                image: {
                    filename: "listingimage",
                    url: randomItem(images)
                },
                price: randomPrice(),
                location: place.city,
                country: place.country,
                owner: OWNER_ID
            });
        }

        await Listing.insertMany(listings);
        console.log("50 listings inserted successfully");

        await mongoose.connection.close();
        console.log("Seeding complete");
    } catch (err) {
        console.error("Seeding error:", err);
    }
}

seedDB();
