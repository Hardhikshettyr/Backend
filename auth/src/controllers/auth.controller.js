// const express=require("express");
// const router=express.Router();
const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken");

async function registerUser(req,res){
    const{username,email,password}=req.body;

    const ifuseralreadyexists=await userModel.findOne({email});
    if(ifuseralreadyexists){
        return res.status(201).json({
            message:"User already exists"
        })
    }

    const user=await userModel.create({
        username,
        email,
        password
    });

    const token=jwt.sign({id:user._id},process.env.jwt_secret);

    res.cookie("token",token);

    res.status(201).json({
        messgae:"User registered successfully",
        user,
        token
    });
}

module.exports={registerUser};