const express = require("express");
const router = express.Router();
const Walk = require("../../models/Walk");
const Dog = require("../../models/Dog");
const User = require("../../models/User");
const upload = require("../../utils/upload");
const { checkLoggedIn } = require("../../utils/middleware");

// Create walk event
router.post("/new/:id", checkLoggedIn, (req, res, next) => {
    const walk = req.body;
    const dogId = req.params.id; // other dog, clicked-on
    let userDog; // dog of logged-in user
    let otherDogOwner; // owner of the other dog, clicked-on

    Dog.findOne({ user: req.user._id })
        .then(dog => {
            userDog = dog;

            return Dog.findById(dogId);
        })
        .then(otherDog => {
            otherDogOwner = otherDog.user;

            return new Walk({
                title: walk.title,
                startDate: walk.startDate,
                time: walk.time,
                location: walk.location,

                // This User is creator of walk
                user: req.user._id,

                // These users are only participating
                // Get Id of user from dog profile, that is clicked on
                participants: [req.user._id, otherDogOwner],

                // // Get Ids of dogs of both owners
                dogs: [dogId, userDog._id]
            }).save();
        })
        .then(walk => {
            User.findByIdAndUpdate({ _id: walk.user }, { $push: { walks: walk._id } }, { new: true })
                .then(updatedUser => {
                    console.log("success", updatedUser);
                })
                .then(participant => {
                    User.findOne({ dogs: dogId });
                    console.log("PARTICIPANTS: ", participant);
                });
            res.send(walk);
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
