const Listing = require("../models/Listing");

/**
 * INDEX – show all listings
 */
module.exports.index = async (req, res, next) => {
    try {
        const allListings = await Listing.find();
        res.render("listings/index", { allListings });
    } catch (err) {
        next(err);
    }
};

/**
 * NEW FORM
 */
module.exports.newForm = (req, res) => {
    res.render("listings/new");
};

/**
 * CREATE – add new listing with image
 */
module.exports.create = async (req, res, next) => {
    try {
        const { title, price, description, location, country } = req.body;

        const listing = new Listing({ title, price, description, location, country });

        if (req.file) {
            listing.image = [{ url: req.file.path, filename: req.file.filename }];
        }

        await listing.save();
        req.session.success = "Listing created successfully!";
        res.redirect(`/listings/${listing._id}`);
    } catch (err) {
        req.session.error = err.message;
        next(err);
    }
};

/**
 * SHOW – single listing
 */
module.exports.show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) return res.redirect("/listings");

        res.render("listings/show", { listing });
    } catch (err) {
        next(err);
    }
};

/**
 * EDIT FORM
 */
module.exports.editForm = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) return res.redirect("/listings");

        res.render("listings/edit", { listing });
    } catch (err) {
        next(err);
    }
};

/**
 * UPDATE – edit listing with optional image
 */
module.exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, price, description, location, country, removeImage } = req.body;

        const listing = await Listing.findById(id);
        if (!listing) throw new Error("Listing not found");

        listing.title = title;
        listing.price = price;
        listing.description = description;
        listing.location = location;
        listing.country = country;

        if (removeImage === "true") listing.image = [];
        if (req.file) listing.image = [{ url: req.file.path, filename: req.file.filename }];

        await listing.save();
        req.session.success = "Listing updated successfully!";
        res.redirect(`/listings/${id}`);
    } catch (err) {
        req.session.error = err.message;
        next(err);
    }
};

/**
 * DELETE
 */
module.exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.session.success = "Listing deleted successfully!";
        res.redirect("/listings");
    } catch (err) {
        next(err);
    }
};
