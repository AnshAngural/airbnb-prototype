const express = require("express");
const router = express.Router();
const bookings = require("../controllers/bookings");
const isLoggedIn = require("../middleware/isloggedIn");

router.post("/:id/book", isLoggedIn, bookings.newBooking);

module.exports = router;
