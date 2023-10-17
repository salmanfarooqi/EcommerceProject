// import cart from "../../models/cartModel.js"

import cart from "../../models/cart/cartModel.js";

let getcartid=async(req,res)=>{

    let cartid= await cart.find({})
    console.log("cardid ",cartid)

    await res.send(cartid)
}

export default getcartid;