const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    name: {
        type: String
    },

    age: {
        type: String
    },

    breed: {
        type: String
    },

    gender: {
        type: String,
        enum: ["male", "female"]
    },

    // getsAlongWith: {
    //     kids: {
    //         type: Boolean,
    //         default: false
    //     },

    //     dogs: {
    //         type: Boolean,
    //         default: false
    //     },

    //     cats: {
    //         type: Boolean,
    //         default: false
    //     }
    // },

    character: {
        courage: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },

        agility: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },

        stubborn: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },

        water: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },

        snuggly: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },

        fightGamer: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        }
    },

    weight: {
        type: String,
        enum: ["light", "middle", "heavy"]
    },

    restrictions: {
        maleDogs: {
            type: Boolean,
            default: false
        },

        femaleDogs: {
            type: Boolean,
            default: false
        },

        traffic: {
            type: Boolean,
            default: false
        },

        publicTransport: {
            type: Boolean,
            default: false
        },

        car: {
            type: Boolean,
            default: false
        }
    },

    aboutMe: {
        type: String
    },

    dogPictures: [
        {
            type: String,
            default: "https://upload.wikimedia.org/wikipedia/commons/2/26/Space_dog_illustration.png"
        }
    ]
});

module.exports = mongoose.model("Dog", dogSchema);
