import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js';
import router from './routes/authRegister.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
// import access from '

// Access-Control-Allow-Origin

// midleware

dotenv.config();
connectdb()
const app=express()
app.use(express.json())
app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));

// app.use('cors')
app.use(cors());





app.use(router)



const PORT=process.env.PORT ||8080;

app.listen(PORT,()=>{
    console.log(process.env.Dev_mode)
    // console.log(Dev_mode)
})