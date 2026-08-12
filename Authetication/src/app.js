const express=require("express");
const app=express();
const authroute=require("./router/auth.routes")
const cookkieparser=require("cookie-parser");

app.use(express.json());
app.use(cookkieparser());
app.use("/api/auth",authroute)




module.exports=app;