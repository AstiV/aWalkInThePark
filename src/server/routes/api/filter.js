const express = require("express");
const router = express.Router();
const Dog = require("../../models/Dog");
const User = require("../../models/User");
const upload = require("../../utils/upload");
const { checkLoggedIn } = require("../../utils/middleware");

// router.get("/index", checkLoggedIn (req, res, next) => {
//     Dog.find({}).then(dogs => {
//         console.log(dogs);

//         const genders = Array.from(dogs).map(dog => {
//             // console.log(dog.gender);
//             // console.log(typeof JSON.stringify(dog.gender));
//             if (typeof JSON.stringify(dog.gender) !== "undefined") {
//                 console.log(dog.gender);

//                 return dog.gender;
//             }
//         });

//         console.log(genders);

//         res.send({ dogs, genders });
//     });
// });

router.post("/results", checkLoggedIn, (req, res, next) => {
    console.log("I AM THE BODY: ", req.body);
    const data = req.body;
    const filterConditions = [];

    console.log("CONDITIONS: ", filterConditions);

    if (data.age) {
        filterConditions.push({ age: data.age });
    }

    if (data.breed) {
        filterConditions.push({ breed: data.breed });
    }

    if (data.zip) {
        filterConditions.push({ zip: data.zip });
    }

    if (data.gender) {
        filterConditions.push({ gender: data.gender });
    }

    if (data.character.courage) {
        filterConditions.push({ courage: data.character.courage });
    }

    if (data.character.agility) {
        filterConditions.push({ agility: data.character.agility });
    }

    if (data.character.stubborn) {
        filterConditions.push({ stubborn: data.character.stubborn });
    }

    if (data.character.water) {
        filterConditions.push({ water: data.character.water });
    }

    if (data.character.snuggly) {
        filterConditions.push({ snuggly: data.character.snuggly });
    }

    if (data.character.fightGamer) {
        filterConditions.push({ fightGamer: data.character.fightGamer });
    }

    if (data.weight) {
        filterConditions.push({ weight: data.weight });
    }

    if (data.restrictions.maleDogs) {
        filterConditions.push({ maleDogs: data.restrictions.maleDogs });
    }

    if (data.restrictions.femaleDogs) {
        filterConditions.push({ femaleDogs: data.restrictions.femaleDogs });
    }

    if (data.restrictions.traffic) {
        filterConditions.push({ traffic: data.restrictions.traffic });
    }
    if (data.restrictions.publicTransport) {
        filterConditions.push({ publicTransport: data.restrictions.publicTransport });
    }
    if (data.restrictions.car) {
        filterConditions.push({ car: data.restrictions.car });
    }

    console.log("CONDITIONS: ", filterConditions);

    Dog.find({ $or: filterConditions }).then(dogs => {
        //TODO handle character and restrictions stricter $and ??? min max?

        if (dogs.length > 0) {
            res.send({ dogs });
        } else {
            res.send("filter/index", {
                message:
                    "There are no translators that fit your search query. Please adjust it and try again."
            });
        }

        console.log("DOGS ", dogs);
    });
});

module.exports = router;
