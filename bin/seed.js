require("dotenv").config();
const mongoose = require("mongoose");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

// require("./chats");
// require("./matches");

// require("./fakeProfiles");
require("./dogs");
require("./users");
