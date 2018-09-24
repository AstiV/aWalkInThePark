const mongoose = require("mongoose");
const User = require("../src/server/models/User");

const bcrypt = require("bcrypt");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

const users = [
    {
        email: "Astrid",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(8), null),
        profilePicture: "https://res.cloudinary.com/astridvarga/image/upload/v1537782975/Astrid.jpg",
        dogs: [],
        walks: []
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
