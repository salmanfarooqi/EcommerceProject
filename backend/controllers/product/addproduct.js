import addProducts from "../../models/prouct/addProduct.js"

 export const addproduct=async(req,res)=>{
    const {productName,productPrice,productDescription,categrie,productImage}=req.body

    //  let test="salman farooqi";
     
    // let {data}=req.body;

// console.log("name:",productName)
// console.log("price",productPrice)
// console.log("description",productDescription
// )
let productData={

    productName,productPrice,productDescription,categrie,productImage
}
console.log("data ",productData)

await addProducts.create(productData)


}


export const deleteproducts = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("Deleting product with ID:", id);
        
        await addProducts.deleteOne({_id:id});

        res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Error deleting product." });
    }
}