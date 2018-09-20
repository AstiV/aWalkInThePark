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
    const creator = req.user;

    let newWalk = new Walk({
        title: walk.title,
        // date: walk.date,
        location: walk.location,

        // This User is creator of walk
        user: creator._id

        // // These users are only participating
        // // Get Id of user from dog profile, that is clicked on
        // participants: [req.user._id], //?

        // // Get Ids of dogs of both owners
        // dogs: [req.dog._id]
    });
    console.log(newWalk);

    // Save new instance of Walk to Database
    newWalk
        .save()
        .then(walk => {
            console.log(walk);
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

// // Read a single walk profile
// router.get("/walk/:id", checkLoggedIn, (req, res, next) => {
//     const walkId = req.params._id;
//     console.log("Walk Id: ", walkId);

//     Walk.findOne({ id: walk })
//         .then(walk => {
//             console.log("Found a Walk!", walk);
//             res.send(walk);
//         })
//         .catch(error => {
//             next(error);
//         });
// });

module.exports = router;
