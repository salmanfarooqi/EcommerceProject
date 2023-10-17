import mongoose, { Schema } from 'mongoose'

let cartSchema=new mongoose.Schema({

    id:{

        type:String,
    },


})

let cart=mongoose.model(

    "cart",
    cartSchema
)

export default cart;