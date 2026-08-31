const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.mongo_uri);
        console.log("DB connected")
    }catch(err){
        console.error("Database connection error",err);
    }
}

module.exports=connectDB;