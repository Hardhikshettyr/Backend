const express=require("express");
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    res.send("Standard get response");
})
app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("Standard post response");
    
})

app.listen (port,()=>{
    console.log("listing ")
})