import addProducts from "../../models/prouct/addProduct.js"

let getproduct=async(req,res)=>{
   
let data=await addProducts.find({})

    await res.send(data)

    // console.log("res",data)


}

export default getproduct;