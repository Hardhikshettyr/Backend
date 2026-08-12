const mongoose=require("mongoose");

async function connectdb() {
    await mongoose.connect(process.env.Mongo_uri);
    console.log("db connected")
}

module.exports=connectdb;