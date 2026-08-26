const mongoose=require("mongoose");


async function connectDb(){
    await mongoose.connect(process.env.mongo_uri);
    console.log("Db Conncected")
}
module.exports=connectDb;