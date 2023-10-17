import mongoose from 'mongoose'


let signupSchema=mongoose.Schema({

    name:{

        type:String,

    },
    email:{


        type:String,
    },

    password:{

        type:String,
    }
})

const newUser=mongoose.model("signup",signupSchema)

export default newUser;