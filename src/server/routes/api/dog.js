const express = require("express");
const router = express.Router();
const Dog = require("../../models/Dog");
const User = require("../../models/User");
const upload = require("../../utils/upload");
const { checkLoggedIn } = require("../../utils/middleware");

// Create dog profile
router.post("/new", checkLoggedIn, (req, res, next) => {
    const dog = req.body;
    console.log("dgw", dog);

    // oder Fehler einfach im frontend abfangen!
    if (req.body.getsAlongWith && !["dogs", "cats", "kids"].includes(dog.getsAlongWith))
        return res.status(400).send({ error: "Invalid value for getsAlongWith" });

    // TODO - extract creation of new Dog in function
    let newDog = new Dog({
        user: req.user._id,
        name: dog.name,
        age: dog.age,
        breed: dog.breed,
        // getsAlongWith: dog.getsAlongWith,
        character: dog.character,
        weight: dog.weight,
        restrictions: dog.restrictions,
        aboutMe: dog.aboutMe
        // dogPictures: dog.dogPictures
    });
    console.log(newDog);

    // Save new instance of Dog to Database
    newDog
        .save()
        .then(dog => {
            // Update Dog Array in respective User Object
            User.findByIdAndUpdate({ _id: dog.user }, { $push: { dogs: dog._id } }, { new: true }).then(
                updatedUser => {
                    console.log("success", updatedUser);
                }
            );
            res.send(dog);
        })
        .catch(error => {
            next(error);
        });
});

// Read all dog profiles of loggedin User
router.get("/all", checkLoggedIn, (req, res, next) => {
    Dog.find({ user: req.user._id })
        .then(dog => {
            res.send(dog);
        })
        .catch(error => {
            next(error);
        });
});

// Read all dog profiles
router.get("/list", checkLoggedIn, (req, res, next) => {
    Dog.find()
        .then(doglist => {
            res.send(doglist);
        })
        .catch(error => {
            next(error);
        });
});

// Read a single dog profile
router.get("/profile/:id", checkLoggedIn, (req, res, next) => {
    const dogId = req.params.id;

    Dog.findById(dogId)
        .then(dog => {
            console.log("Found a Dog!", dog);
            res.send(dog);
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;
