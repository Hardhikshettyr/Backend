require("dotenv").config();
const app=require("./src/app");
const connectdb=require("./src/db/db");


app.listen(3000,()=>{
    console.log("Server Connected");
})


connectdb();