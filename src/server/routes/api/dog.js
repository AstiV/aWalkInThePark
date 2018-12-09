const express = require("express");
const router = express.Router();
const Dog = require("../../models/Dog");
const User = require("../../models/User");
const upload = require("../../utils/upload");
const { checkLoggedIn } = require("../../utils/middleware");

// Create dog profile
router.post("/new", checkLoggedIn, (req, res, next) => {
    const dog = req.body;
    console.log("Hello from the REQ Body: ", dog);

    // oder Fehler einfach im frontend abfangen!
    // if (req.body.getsAlongWith && !["dogs", "cats", "kids"].includes(dog.getsAlongWith))
    //     return res.status(400).send({ error: "Invalid value for getsAlongWith" });

    let newDog = new Dog({
        user: req.user._id,
        name: dog.name,
        street: dog.street,
        zip: dog.zip,
        age: dog.age,
        breed: dog.breed,
        gender: dog.gender,
        character: dog.character,
        weight: dog.weight,
        restrictions: dog.restrictions,
        aboutMe: dog.aboutMe,
        dogPicture: dog.dogPicture
    });
    console.log("Hello from the newDog: ", newDog);

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
        .populate("user")
        .then(dog => {
            res.send(dog);
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;
