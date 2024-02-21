const mongoose = require('mongoose')
require("dotenv").config();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
          "mongodb+srv://shashikantrupin123:rupin123@cluster0.iulmqkl.mongodb.net/recorderdb?retryWrites=true&w=majority"
        );
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
