const express = require("express");
const router = express.Router();
const Walk = require("../../models/Walk");
const Dog = require("../../models/Dog");
const User = require("../../models/User");
const upload = require("../../utils/upload");
const { checkLoggedIn } = require("../../utils/middleware");

// Create walk event
router.post("/new", checkLoggedIn, (req, res, next) => {
    const walk = req.body;
    console.log("REQ BODY: ", req.body);
    console.log("REQ USER: ", req.user);

    let newWalk = new Walk({
        title: walk.title,
        startDate: walk.startDate,
        time: walk.time,
        location: walk.location,

        // This User is creator of walk
        user: req.user._id

        // These users are only participating
        // Get Id of user from dog profile, that is clicked on
        // participants: [req.user._id] //?

        // // Get Ids of dogs of both owners
        // dogs: [req.body.dog]
    });
    console.log("After CREATION: ", newWalk);
    console.log("REQ.USER: ", req.user);

    // Save new instance of Walk to Database
    newWalk
        .save()
        .then(walk => {
            console.log("walk in Promise: ", walk);
            User.findByIdAndUpdate(
                { _id: walk.user },
                { $push: { walks: walk._id } },
                { new: true }
            ).then(updatedUser => {
                console.log("success", updatedUser);
            });
            res.send(walk);
        })
        .catch(error => {
            next(error);
        });
});

// Read all walks of loggedin User
router.get("/all", checkLoggedIn, (req, res, next) => {
    Walk.find({ user: req.user._id })
        // .populate("participants", "email")
        // .populate("user")
        // .populate("dogs")
        .then(walk => {
            res.send(walk);
        })
        .catch(error => {
            next(error);
        });
});

// Read all walks
// TODO show only walks that are NOT private
router.get("/list", checkLoggedIn, (req, res, next) => {
    Walk.find()
        .then(walklist => {
            res.send(walklist);
        })
        .catch(error => {
            next(error);
        });
});

// Read a single walk
router.get("/:id", checkLoggedIn, (req, res, next) => {
    const walkId = req.params.id;

    Walk.findById(walkId)
        .populate("user")
        .populate("dogs")
        .populate("participants")
        .then(walk => {
            res.send(walk);
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;
