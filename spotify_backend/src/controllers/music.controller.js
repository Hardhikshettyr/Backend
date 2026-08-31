const musicmodel=require("../models/music.model");
const jwt=require("jsonwebtoken");

async function createMusic(req,res){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized",
        })
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        if(decode.role!=="artist"){
            return res.status(403).json({
                message:"Forbidden Access"
            })
        }
    }
    catch(err){
        return res.status(401).json({
            message:"Unauthorized",
        })
    }

    const title=req.body.title;
    const file=req.file;
}