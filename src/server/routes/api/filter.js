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
    const gender = req.body;
    // const filterConditions = [];

    console.log("GENDER I: ", gender);
    // console.log("CONDITIONS: ", filterConditions);

    // if (gender) {
    //     filterConditions.push({ "genders.gender": gender });
    // }

    // console.log("GENDER II: ", gender);
});

//   const { gender } = req.body;
//     const filterConditions = [];

//     if (gender) {
//       filterConditions.push({ "genders.gender": gender });
//     }

//     // if (minRating) {
//     //   filterConditions.push({ rating: { $gte: parseInt(minRating) } });
//     // }

//     Dog.find({ $and: filterConditions }).then(dogs => {
//       if (dogs.length > 0) {
//         res.send({ dogs });
//       } else {
//         res.send("filter/index", {
//           message:
//             "There are no translators that fit your search query. Please adjust it and try again."
//         });
//       }
//     });

module.exports = router;
