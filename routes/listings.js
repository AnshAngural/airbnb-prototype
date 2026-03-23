// routes/listings.js

const express = require("express");
const router = express.Router();
const listings = require("../controllers/listings");
const isLoggedIn = require("../middleware/isloggedIn");
const isOwner = require("../middleware/isOwner");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

// ✅ Static routes FIRST
router.get("/", listings.index);
router.get("/new", isLoggedIn, listings.newForm);        // ← must be before /:id
router.post("/", isLoggedIn, upload.single("image"), listings.create);

// ✅ Dynamic routes AFTER
router.get("/:id", listings.show);
router.get("/:id/edit", isLoggedIn, isOwner, listings.editForm);
router.put("/:id", isLoggedIn, isOwner, upload.single("image"), listings.update);
router.delete("/:id", isLoggedIn, isOwner, listings.delete);

module.exports = router;