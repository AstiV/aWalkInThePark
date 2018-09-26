const mongoose = require("mongoose");
const Walk = require("../src/server/models/Walk");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

const walks = [
    {
        _id: "5bbb840bee032556c625aaf9",
        title: "Sunday Walk",
        startDate: "",
        time: "14:00",
        location: "Hasenheide",
        user: "5baa840bee032556c625aaf6",
        participants: ["5baa840bee032556c625aaf9"],
        dogs: ["5baa840bee032556c625aaf3"],
        public: "private"
    },

    {
        _id: "5ccc840bee032556c625aaf9",
        title: "Let's go out with a big pack",
        startDate: "",
        time: "14:00",
        location: "Grunewald",
        user: "5baa840bee032556c625aaf7",
        participants: ["5baa840bee032556c625aaf9", "5baa840bee032556c625aaf8"],
        dogs: ["5baa840bee032556c625aaf3", "5baa840bee032556c625aaf5"],
        public: "public"
    },

    {
        _id: "5ddd840bee032556c625aaf9",
        title: "Trekking",
        startDate: "",
        time: "14:00",
        location: "Brandenburg",
        user: "5baa840bee032556c625aaf9",
        participants: [],
        dogs: [],
        public: "public"
    }
];

Walk.create(walks, (err, walk) => {
    if (err) {
        throw err;
    } else {
        walk.forEach(walk => {
            console.log(walk);
        });
    }
    mongoose.connection.close();
});
