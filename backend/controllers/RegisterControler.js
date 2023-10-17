import express  from 'express'
import RegistrationCollection from '../models/RegistrationCollection.js'
// import Registration from './models/RegisterModels.js'
// import Registration from './models/RegisterModels.js'


const RegisterControler=async(req,res)=>{
    const {name,email,password}=req.body

    //  let test="salman farooqi";
     
    // let {data}=req.body;

console.log("name:",name)
const RegistrationData={

    Name:name,
    Email:email,
    password
}
console.log(RegistrationData)

// Registration.insertMany[RegistrationData]
let data= await RegistrationCollection.create(RegistrationData)
console.log("data is ",data)
    
    // console.log("contoller",name)
    //   await res.send(test)
}

export default RegisterControler;