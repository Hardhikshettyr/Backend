const app=require("./src/app");
const connectdb=require("./src/db/db");

connectdb();

app.listen(3000,()=>{
    console.log("Server created at port 3000");
});