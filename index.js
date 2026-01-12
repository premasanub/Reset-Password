import express from 'express';
import connectDB from './DbConnection/dbConnection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './Routes/passwordRoute.js';


//dotenv config
dotenv.config();


//express initialization
const app=express();



//default middleware
app.use(express.json());
app.use(cors());



//Database connection
connectDB();

//default route
app.get("/",(req,res) =>{
    res.status(200).send({message:"welcome to reset password backend"});
});

//custom routes
app.use("/api/auth", authRoute);
//port
const PORT=process.env.PORT || 3000;

//server starting
app.listen(PORT,()=>{
    console.log ("server started");
});