const jwt=require("jsonwebtoken");

async function createPost(req,res){
    const token=req.cookies.token;
    if(!token){
        return res.status(201).json({
            message:"user not found",
        })
    }

    try{
        jwt.verify(token,process.env.jwt_secret);
    }catch(err){
        return res.status(201).json({
            message:"Invalid token"
        })
    }
     res.status(201).json({
        message:"user veriied successfully"
    })

}
module.exports={createPost};