const mongoose=require("mongoose");

async function connectDb() {
    await mongoose.connect("mongodb+srv://hardhik:o2AegyK1mdDJLVOb@backend1.80buvgk.mongodb.net/hardhikone");
    console.log("db connected")
}
module.exports=connectDb;