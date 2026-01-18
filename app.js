require("dotenv").config();



const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");

const User = require("./models/User");

const app = express();

/* -------------------- MongoDB -------------------- */
mongoose
    .connect("mongodb://127.0.0.1:27017/sites")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

/* -------------------- View Engine -------------------- */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "boilerplate");

/* -------------------- Middleware -------------------- */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for API requests if needed
app.use(methodOverride("_method"));

/* -------------------- Session -------------------- */
app.use(
    session({
        secret: 'process.env.supersecretkey',// replace with a strong secret in production
        resave: false,
        saveUninitialized: false
    })
);

/* -------------------- Flash Messages -------------------- */
// Custom flash middleware (replaces connect-flash)
app.use((req, res, next) => {
    res.locals.success = req.session.success || null;
    res.locals.error = req.session.error || null;
    req.session.success = null;
    req.session.error = null;
    next();
});

/* -------------------- Passport -------------------- */
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* -------------------- Global Variables -------------------- */
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

/* -------------------- Routes -------------------- */
app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/listings", require("./routes/listings"));
app.use("/", require("./routes/users"));
app.use("/bookings", require("./routes/bookings"));

/* -------------------- Server -------------------- */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
