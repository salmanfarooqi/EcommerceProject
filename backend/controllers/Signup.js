// import signup from "../config/models/signup.js"
// import jsonwebtoken  from 'jsonwebtoken'


// const Registration=async(req,res)=>{


//     const {name,email,password}=req.body

//     console.log(name)


//    let  signupdata={

//         name,email,password,
//     }

//   await   signup.create(signupdata)
//   let test={

//     "name":"khan"
//   }


//  jsonwebtoken.sign({test},'secretkey',{expiresIn:'300s'},(err,token)=>{res.status.json({token})


//  })

// }


// export default Registration;


// import newUser from "../models/Registration.js";
import newUser from '../models/signup.js';
import bcrypt from 'bcrypt'
// import jsonwebtoken from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

// const SECRET_KEY = process.env.JWT_SECRET_KEY || "defaultSecretKey";  // Using an environment variable or a default

export const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userAlreadyRegister = await newUser.findOne({ email });

        if (userAlreadyRegister) {
            return res.status(400).send("this email already exist")
        }

        const signupData = { name, email, password: hashedPassword };
        await newUser.create(signupData);
        res.status(200).send("your account is sucessfully created")

        // res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export const logincontroller = async (req, res) => {
    console.log("login called")
    try {
        const { email, password } = req.body;
        // console.log(email,password)
        const SECRET_KEY="secretkey"

        const user = await newUser.findOne({ email:email });
        // console.log("user",user)

        if(!user){

            res.status(202).json({message:"not register"})
        }

        if (user && await bcrypt.compare(password, user.password)) {
            const payload = { email: user.email };
            // res.status(200).json({ message: "validUser" });
            // console.log(user)

            const token=jwt.sign({payload}, SECRET_KEY, { expiresIn: "300s" })
            console.log("token",token)

            res.cookie("token",token).json({payload,token})
            // res.status(200).json({ message: "validUser" ,token});
            //     if (error) {
            //         return res.status(500).json({ message: "Token generation failed.", error });
            //     }
            //     res.status(200).json({ message: "validUser" });
            //     res.json(user,token)
            //     console.log("token is  ",token)
            // });
        } else {
            res.status(200).json({ message: "Incorrect email or password." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}
