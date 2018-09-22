const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walkSchema = new Schema({
    title: String,
    startDate: Date,
    time: String,
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
        type: String,
        default: "private"
    }
});

module.exports = mongoose.model("Walk", walkSchema);
