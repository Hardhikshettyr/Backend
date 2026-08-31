require("dotenv").config();
const express=require("express");
const authroutes=require("./routes/auth.routes");
const postroutes=require("./routes/post.routes");
const cookieparser=require("cookie-parser");
const app=express();
app.use(express.json());
app.use(cookieparser());
app.use("/api/auth",authroutes);
app.use("/api/post",postroutes);


module.exports=app;