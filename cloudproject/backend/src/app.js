
const express=require("express");
const app=express();
const postmodel=require("./models/post.model");
const multer=require("multer");
const uploadfile=require("./services/storage.services")
const cors=require("cors");

const upload=multer({storage:multer.memoryStorage()})
app.use(cors());

app.post('/posts', upload.single('image'), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const result=await uploadfile(req.file.buffer);
    const post =await postmodel.create({
        image:result.url,
        caption:req.body.caption
    })
    res.status(201).json({
        message:"post created Successfully",
        post
    })


})

app.get('/posts',async (req,res)=>{
    const posts=await postmodel.find();
    res.status(200).json({
        message:"Post displayed Successfully",
        posts:posts
    })
})
module.exports=app;