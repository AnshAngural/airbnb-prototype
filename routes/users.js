const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

/* -------------------- Register -------------------- */
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

router.post("/signup", async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const user = new User({ username, email });
        await User.register(user, password);

        // Automatically log in the user after registration
        req.logIn(user, err => {
            if (err) return next(err);
            req.session.success = "Registered successfully!";
            res.redirect("/listings");
        });
    } catch (err) {
        req.session.error = err.message;
        res.redirect("/signup");
    }
});

/* -------------------- Login -------------------- */
router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            req.session.error = "Invalid username or password";
            return res.redirect("/login");
        }
        req.logIn(user, err => {
            if (err) return next(err);
            req.session.success = "Welcome back!";
            return res.redirect("/listings");
        });
    })(req, res, next);
});

/* -------------------- Logout -------------------- */
router.get("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.session.success = "Logged out successfully!";
        res.redirect("/login");
    });
});

module.exports = router;
