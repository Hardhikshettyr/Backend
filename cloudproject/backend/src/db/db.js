const mongoose = require("mongoose");

async function connectdb() {

    await mongoose.connect(process.env.mongo_uri);
    console.log("DB Connected");
}

module.exports = connectdb;