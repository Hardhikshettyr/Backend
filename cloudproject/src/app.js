const express=require("express");
require("dotenv").config();

const app=express();
const postmodel=require("./models/post.model")
const multer=require("multer");
const uploadfile=require("./services/storage.services");

const upload=multer({Storage:multer.memoryStorage()})

app.use(express.json());

app.post('/create-post',upload.single("image"), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result=await uploadfile(req.file.buffer)

    const post=await postmodel.create({
        image:result.url,
        caption:req.body.caption,
    })

    res.status(201).json({
        message:"Post Created Successfully",
        post

    })

})

app.get("/posts",async (req,res)=>{
    const post= await postmodel.find()
    res.status(200).json({
        posts:post,
        message:"Posts displayed"
    })
})

module.exports=app;