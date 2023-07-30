import cors from 'cors'
import dotenv from 'dotenv'
import logger from 'morgan'
import mongoose from 'mongoose'
import connectDB from './config/dbConn'
import corsOpt from './config/corsOptions'
import express, { Application } from 'express'

dotenv.config()
connectDB(process.env.DATABASE_URI as string)

const app: Application = express()
const PORT = process.env.PORT || 2003

// set middlewares
app.use(cors(corsOpt))
app.use(express.json({ limit: '50mb' }))
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB server!')
    app.listen(PORT, () => {
        console.log('Server is running!')
    })
})
