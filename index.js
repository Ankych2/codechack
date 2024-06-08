const express=require('express');
const app=express();

 
//Post Api to create user
app.post("/user", async  (req,res)=>{

})


//Get Api to fetch all  user
 
app.get("/user", async  (req,res)=>{

})


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT);
})