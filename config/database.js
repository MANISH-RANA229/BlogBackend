const mongoose = require("mongoose");
require("dotenv").config();


const connectwithDB =()=>{
    mongoose.connect(process.env.BLOG_URL||"mongodb://127.0.0.1:27017/BlogDatabase" ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error");
console.error(error.message);
process.exit(1);
} );
}
module.exports = connectwithDB;