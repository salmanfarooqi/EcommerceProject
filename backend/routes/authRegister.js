import express from 'express'
// import RegisterControler from '../controllers/RegisterControler.js'
import {  addproduct,deleteproducts } from '../controllers/product/addproduct.js'
import getproduct from '../controllers/product/getproduct.js'
import {  cartFun,deleteproduct } from '../controllers/cart/cart.js'
import getcartid from '../controllers/cart/getCartIds.js'
import { logincontroller, signupController } from '../controllers/Signup.js'
// import Registration from '../controllers/Signup.js'
// import getcartid from '../controllers/cart/getcartid.js'
const router=express.Router()

// router.post("/signup",RegisterControler)
router.post('/addproduct',addproduct)
router.post('/addtocart',cartFun)
router.get('/',getproduct)
router.get('/cart',getcartid)

router.post("/signup",signupController)
router.post('/login',logincontroller)
router.post("/deleteproducts",deleteproduct)
router.post("/deleteproduct",deleteproducts)


export default router;