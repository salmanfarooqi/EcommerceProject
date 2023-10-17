import mongoose from "mongoose";

let addproductSchema= new mongoose.Schema({

    productName:{

        type:String,
    },
    productPrice:{

        type:Number,
    },
    productDescription:{

        type:String,
    }
    ,
    categrie:{

        type:String,
    },

    productImage:{

        type:String,
    }
})

let  addProducts=mongoose.model(
    "addproduct", addproductSchema
)

export default addProducts;