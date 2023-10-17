import cart from "../../models/cart/cartModel.js";

export const cartFun = async (req, res) => {
    try {
        console.log("Data", req.body);
        const { data } = req.body;
        console.log("Data is", data);
        
        const cartdata = { id: data };
        await cart.create(cartdata);

        res.status(201).json({ message: "Item added to cart successfully." });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Error adding to cart." });
    }
}

export const deleteproduct = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("Deleting product with ID:", id);
        
        await cart.deleteOne({id:id});

        res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Error deleting product." });
    }
}
