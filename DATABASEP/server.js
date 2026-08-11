const app=require("./src/app");
const connectDB=require("./src/db/db")

app.listen(3000,()=>{
    console.log("server started");
})
connectDB();