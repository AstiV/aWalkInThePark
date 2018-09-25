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
