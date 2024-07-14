import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import path from "path"
import userRoutes from "./routes/userRoutes.js"
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const PORT = process.env.PORT || 4000

// ROUTES
app.use("/api/book/users", userRoutes)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
