const mongoose=require("mongoose");

async function connectdb(){
    try{
        await mongoose.connect(process.env.mongo_uri);
        console.log("Db connected");
    }catch(err){
        console.error("Error in connecting DB:",err);
    }
}
module.exports=connectdb;