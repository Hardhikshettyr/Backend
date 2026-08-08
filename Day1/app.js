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

app.get('/:username/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(req.params.id);
})
app.get('/search',(req,res)=>{
    console.log(req.query.q)
})