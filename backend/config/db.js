import mongoose from 'mongoose'
import dotenv from 'dotenv'
const connectdb=async()=>{

    try {
        dotenv.config();
        // const connection=await mongoose.connect("mongodb://127.0.0.1:27017/ecomerce")

        await mongoose.connect(process.env.url)
         console.log(process.env.url)
        
        console.log("connect to mongodb")
        
    } catch (error) {

        console.log(`there is in erro ${error}`)
        
    }
}

export default connectdb;