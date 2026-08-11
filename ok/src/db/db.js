const mongoose=require("mongoose");

async function connectdb() {
    await mongoose.connect("mongodb+srv://hardhik:o2AegyK1mdDJLVOb@backend1.80buvgk.mongodb.net/hardhiktwo");
    console.log("db connected")
}

module.exports=connectdb;