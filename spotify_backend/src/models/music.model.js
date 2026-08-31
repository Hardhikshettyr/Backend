const mongoose=require("mongoose");

const musicschema=new mongoose.Schema({
    uri:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    artist:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const musicModel=mongoose.model("music",musicschema);
module.exports=musicModel;


