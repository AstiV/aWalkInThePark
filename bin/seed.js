require("dotenv").config();
const mongoose = require("mongoose");

const dbName = "awalkinthepark";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);

require("./walks");
require("./dogs");
require("./users");
