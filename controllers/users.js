const User = require("../models/User");
const passport = require("passport");

module.exports = {
    renderSignup: (req, res) => {
        res.render("users/signup", { title: "Sign Up" });
    },

    signup: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const user = new User({ username, email });
            await User.register(user, password);
            res.redirect("/login");
        } catch (err) {
            res.render("users/signup", { title: "Sign Up", error: err.message });
        }
    },

    renderLogin: (req, res) => {
        res.render("users/login", { title: "Login" });
    },

    login: passport.authenticate("local", {
        successRedirect: "/listings",
        failureRedirect: "/login"
    }),

    logout: (req, res, next) => {
        req.logout(err => {
            if (err) return next(err);
            res.redirect("/login");
        });
    }
};
