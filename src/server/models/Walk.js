const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walkSchema = new Schema({
    title: String,
    date: Date,
    location: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    dogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Dog"
        }
    ],

    public: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Walk", walkSchema);
