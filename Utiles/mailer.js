import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { text } from "express";


dotenv.config();

const transporter = nodemailer.createTransport({
 service: "Gmail",
 auth:{
    user:process.env.PASS_MAIL,
    pass:process.env.PASS_KEY,
 },
});


const sendEmail = async (to,subject,text)=>{
    const mailOption ={
        from : user.PASS_MAIL;
        to,
        subject,
        text,
    };
    try{
        await transporter.sendMail(mailOption)
        console.log("Email sent successfully");

    }
    catch(error){
         console.error("Error sending email:", error);
    }
};

export default sendEmail;