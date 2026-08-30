const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post("/post",(req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    try{
        jwt.verify(token,process.env.jwt_secret);
    }catch(err){
        return res.status(401).json({
            message:"token is inavalid"
        })
    }
    console.log(req.cookies);
    res.send("post created successfully");

});
module.exports = router;