const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware

app.use(express.json());


const blog = require("./routes/blog")

//mount 

app.use("/api/v1", blog);


const connectwithDB=require("./config/database");
connectwithDB();

//start the server


app.listen(PORT,()=>{
    console.log(`server sterted at ${PORT}`);

})
app.get("/",(req,res)=>{
    res.send(`<h1>how is it going</h1>`)
})
