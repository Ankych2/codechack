const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const connectDB = require('./mongodb.config');
connectDB();
const UserModel=require('./user-model')
// Load environment variables from .env file
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

/**Routes to handle Request */
 
//Post Api to create user
app.post("/user", async  (req,res)=>{
console.log(req.body,"Nodejs Controller Called.")
let user=await UserModel.create(req.body)
console.log(`User Created Successfully ${user}`);
return  res.json({message:'User Created Successfully',user});
})


//Get Api to fetch all  user
 
app.get("/user", async  (req,res)=>{
    console.log(req.body,"Nodejs Controller Called.")
    let allUsers=await UserModel.find()
    console.log(`User Created Successfully ${allUsers}`);
    return  res.status(200).json({message:'User fetched successfully',allUsers});
})


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT);
})