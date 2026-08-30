const express=require("express");
const authroutes=require("./routes/auth.routes");
const postroutes=require("./routes/post.quth");
const app=express();
const cookieparser=require("cookie-parser")
app.use(express.json());
app.use(cookieparser())

app.use("/api/auth",postroutes);
app.use("/api/auth",authroutes);


module.exports=app;