require("dotenv").config();
const app=require("./src/app")
const ConnectDB=require("./src/db/db")

app.listen(3000,()=>{
    console.log("server started");
})
ConnectDB();