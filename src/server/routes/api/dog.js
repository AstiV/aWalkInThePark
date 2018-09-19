const express = require("express");
const router = express.Router();
const Dog = require("../../models/Dog");
const User = require("../../models/User");
const upload = require("../../utils/upload");
const { checkLoggedIn } = require("../../utils/middleware");

// Create dog profile
router.post("/new", checkLoggedIn, (req, res, next) => {
    const dog = req.body;

    // oder Fehler einfach im frontend abfangen!
    if (req.body.getsAlongWith && !["dogs", "cats", "kids"].includes(dog.getsAlongWith))
        return res.status(400).send({ error: "Invalid value for getsAlongWith" });

    let newDog = new Dog({
        user: req.user._id,
        name: dog.name,
        age: dog.age,
        breed: dog.breed
        // getsAlongWith: dog.getsAlongWith
        // character: character
        // weight: weight,
        // restrictions: restrictions,
        // aboutMe: aboutMe,
        // dogPictures: dogPictures
    });

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
            res.send.json(dog);
        })
        .catch(error => {
            next(error);
        });

    console.log("Hallo");
});

module.exports = router;
