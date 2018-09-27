const mongoose = require("mongoose");
const Walk = require("../src/server/models/Walk");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

const walks = [
    {
        _id: "5bbb840bee032556c625aaf9",
        title: "Sunday Walk",
        startDate: 2018 - 30 - 10,
        time: "14:00",
        location: "Hasenheide",
        user: "5baa840bee032556c625aaf6",
        participants: ["5baa840bee032556c625aaf9", "5baa840bee032556c625aaf6"],
        dogs: ["5baa840bee032556c625aaf3", "5baa840bee032556c625aaf2"],
        public: "private"
    },

    {
        _id: "5ccc840bee032556c625aaf9",
        title: "Let's go out with a big pack",
        startDate: 2018 - 06 - 10,
        time: "15:30",
        location: "Grunewald",
        user: "5baa840bee032556c625aaf7",
        participants: [
            "5baa840bee032556c625aaf9",
            "5baa840bee032556c625aaf8",
            "5baa840bee032556c625aaf7"
        ],
        dogs: ["5baa840bee032556c625aaf3", "5baa840bee032556c625aaf5", "5baa840bee032556c625aaf4"],
        public: "public"
    },

    {
        _id: "5ddd840bee032556c625aaf9",
        title: "Trekking",
        startDate: 2018 - 14 - 10,
        time: "15:00",
        location: "Brandenburg",
        user: "5baa840bee032556c625aaf9",
        participants: ["5baa840bee032556c625aaf9", "5baa840bee032556c625aaf8"],
        dogs: ["5baa840bee032556c625aaf3", "5baa840bee032556c625aaf5"],
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
