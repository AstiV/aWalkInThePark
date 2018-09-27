const mongoose = require("mongoose");
const Dog = require("../src/server/models/Dog");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

const dogs = [
    {
        _id: "5baa840bee032556c625aaf2",
        user: "5baa840bee032556c625aaf6",
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
        dogPicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537801775/IMG_5157_2.jpg"
    },
    {
        _id: "5baa840bee032556c625aaf3",
        user: "5baa840bee032556c625aaf9",
        name: "Guapo",
        street: "Leine Straße",
        zip: "12049",
        age: "12",
        breed: "Mix",
        gender: "male",
        character: {
            courage: 2,
            agility: 1,
            stubborn: 1,
            water: 2,
            snuggly: 5,
            fightGamer: 1
        },
        weight: "light",
        restrictions: {
            maleDogs: true,
            femaleDogs: false,
            publicTransport: false,
            car: false
        },
        aboutMe: "",
        dogPicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537802147/Guapo_1.jpg"
    },
    {
        _id: "5baa840bee032556c625aaf4",
        user: "5baa840bee032556c625aaf7",
        name: "Jacky",
        street: "Köpenicker Straße",
        zip: "10997",
        age: "7",
        breed: "Mix",
        gender: "female",
        character: {
            courage: 5,
            agility: 5,
            stubborn: 5,
            water: 5,
            snuggly: 5,
            fightGamer: 5
        },
        weight: "middle",
        restrictions: {
            maleDogs: false,
            femaleDogs: false,
            publicTransport: false,
            car: true
        },
        aboutMe: "Let's have a race",
        dogPicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537790218/Jacky.jpg"
    },
    {
        _id: "5baa840bee032556c625aaf5",
        user: "5baa840bee032556c625aaf8",
        name: "Ecko",
        street: "Muskauer Straße",
        zip: "10996",
        age: "6",
        breed: "Mix",
        gender: "male",
        character: {
            courage: 1,
            agility: 2,
            stubborn: 1,
            water: 4,
            snuggly: 1,
            fightGamer: 1
        },
        weight: "middle",
        restrictions: {
            maleDogs: true,
            femaleDogs: false,
            publicTransport: false,
            car: false
        },
        aboutMe: "Let's got for a walk",
        dogPicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537802326/Ecko.jpg"
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
