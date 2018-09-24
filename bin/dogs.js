const mongoose = require("mongoose");
const Dog = require("../src/server/models/Dog");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

const dogs = [
    {
        // email: "Astrid",
        // password: bcrypt.hashSync("test", bcrypt.genSaltSync(8), null),
        // profilePicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537782975/Astrid.jpg",
        // dogs: [],
        // walks: []

        // user: "", // here goes some id ?????
        name: "Bibi",
        street: "Muskauer Straße",
        zip: "10997",
        age: "7",
        breed: "Bichon Frisé",
        gender: "female",
        character: {
            courage: 5,
            agility: 2,
            stubborn: 5,
            water: 4,
            snuggly: 5,
            fightGamer: 1
        },
        weight: "light",
        restrictions: {
            maleDogs: false,
            femaleDogs: false,
            publicTransport: true,
            car: false
        },
        aboutMe: "Lovliest creature on this planet",
        dogPictures: ["https://res.cloudinary.com/astridvarga/image/upload/v1537787914/IMG_5157_2.jpg"]
    }
];

Dog.create(dogs, (err, dog) => {
    if (err) {
        throw err;
    } else {
        dog.forEach(dog => {
            console.log(dog);
        });
    }
    mongoose.connection.close();
});
