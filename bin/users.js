const mongoose = require("mongoose");
const User = require("../src/server/models/User");

const bcrypt = require("bcrypt");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

const users = [
    {
        _id: "5baa840bee032556c625aaf6",
        email: "Astrid",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(8), null),
        profilePicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537782975/Astrid.jpg",
        dogs: ["5baa840bee032556c625aaf2"],
        walks: ["5bbb840bee032556c625aaf9"]
    },
    {
        _id: "5baa840bee032556c625aaf7",
        email: "Sabine",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(8), null),
        profilePicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537798476/Bine.jpg",
        dogs: ["5baa840bee032556c625aaf4"],
        walks: ["5ccc840bee032556c625aaf9"]
    },
    {
        _id: "5baa840bee032556c625aaf8",
        email: "Ewa",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(8), null),
        profilePicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537801906/Ewa.jpg",
        dogs: ["5baa840bee032556c625aaf5"],
        walks: []
    },
    {
        _id: "5baa840bee032556c625aaf9",
        email: "Elisa",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(8), null),
        profilePicture:
            "https://res.cloudinary.com/astridvarga/image/upload/v1537802392/rian-adi-703009-unsplash_1.jpg",
        dogs: ["5baa840bee032556c625aaf3"],
        walks: ["5ddd840bee032556c625aaf9", "5bbb840bee032556c625aaf9"]
    }
];

User.create(users, (err, user) => {
    if (err) {
        throw err;
    } else {
        user.forEach(user => {
            console.log(user);
        });
    }
    mongoose.connection.close();
});
