const express=require("express");
const app=express();

// app.get('/',(req,res)=>{
//     res.send("hello world")
// });

app.listen(3000,()=>{
    console.log("Server Started");
})

app.use((req,res,next)=>{
    console.log("request received");
    next();
})

app.get('/',(req,res)=>{
    res.send("hell");
})