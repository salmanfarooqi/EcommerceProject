import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
    },
    email:{
        type:email,
    }


})

const User= mongoose.model('user',userSchema)

export default User;