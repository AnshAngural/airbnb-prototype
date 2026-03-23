const Listing = require("../models/listing");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.session.error = 'Listing not found!';
        return res.redirect('/listings');
    }

    if (!req.user) {
        req.session.error = 'You must be logged in!';
        return res.redirect('/login');
    }

    if (!listing.owner.equals(req.user._id)) {
        req.session.error = 'You do not have permission!';
        return res.redirect(`/listings/${id}`);
    }

    next();
};