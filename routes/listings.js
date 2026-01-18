const express = require("express");
const router = express.Router();
const listings = require("../controllers/listings");
const isLoggedIn = require("../middleware/isLoggedIn");
const multer = require("multer");
const { storage } = require("../cloudConfig"); // Cloudinary config
const upload = multer({ storage });

// Listing routes
router.get("/", listings.index);
router.get("/new", isLoggedIn, listings.newForm);
router.post("/", isLoggedIn, upload.single("image"), listings.create);
router.get("/:id", listings.show);
router.get("/:id/edit", isLoggedIn, listings.editForm);
router.put("/:id", isLoggedIn, upload.single("image"), listings.update);
router.delete("/:id", isLoggedIn, listings.delete);

module.exports = router;
