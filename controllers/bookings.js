const Booking = require("../models/Booking");

module.exports.newBooking = async (req, res) => {
    const booking = new Booking({
        listing: req.params.id,
        user: req.user._id,
        from: req.body.from,
        to: req.body.to
    });
    await booking.save();
    res.redirect("/listings");
};
