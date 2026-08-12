const mongoose=require("mongoose");

async function connectdb() {

    try{
        await mongoose.connect(process.env.Mongo_uri);
        console.log("db connected")
    }catch(err){
        console.err("Database error")
    }

    
}

module.exports=connectdb;