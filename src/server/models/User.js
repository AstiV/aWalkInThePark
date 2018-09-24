const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },

    name: {
        type: String
    },

    profilePicture: {
        type: String,
        default:
            "https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg"
    },

    dogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Dog"
        }
    ],

    walks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Walk"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
