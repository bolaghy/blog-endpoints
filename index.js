require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose =require("mongoose")
const authRouter = require('./routes/authRouter')
const auth =require("./middleware/authetication")
const blogRouter = require('./routes/blogRouter')
const notFound =require("./utilis/notfound")

//middleware
app.use(express.json());
// routes
app.use("/api/v1", authRouter) 
// app.get("/test", auth, (req,res)=>{
//    res.send("passed Auth")
// })
app.use("/api/v1/blog", auth, blogRouter)

//error route
app.use(notFound)


const start = async ()=>{
    try {
         await mongoose.connect(process.env.dbUrl)
         app.listen(PORT, ()=>{
            console.log(`server is running localhost ${PORT}... and DB is connected` );
         })
    } catch (error) {
       console.log(error); 
    }
}
start();
