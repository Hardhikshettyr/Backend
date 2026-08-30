const mongoose=require("mongoose");

async function connectdb(){
    try{
        await mongoose.connect(process.env.mongo_uri);
        console.log("Db connected")
    }catch(err){
        console.error("Database connection error:",err);
    }
}
module.exports=connectdb;