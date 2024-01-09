
import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

const app = express();
dotenv.config({
    path: "./env"
})


connectDB()
.then(()=> {
    app.on("error", (error) => {
        console.log("Error:", error);
        throw error
    })
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
})





