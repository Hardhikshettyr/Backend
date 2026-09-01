const jwt=require("jsonwebtoken");

async function authArtist(req,res,next){
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
        req.user=decode;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message:"Unauthorized",
        })
    }
}
async function authUser(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized",
        })
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        if(decode.role!=="user" && decode.role!=="artist"){
            return res.status(403).json({
                message:"Forbidden Access"
            })
        }
        req.user=decode;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message:"Unauthorized",
        })
    }
}
module.exports={authArtist,authUser};