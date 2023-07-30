import dotenv from 'dotenv'
import * as mongoose from "mongoose"

dotenv.config()

export default async function connectDB(DATABASE_URI: string) {
    try {
        await mongoose.connect(DATABASE_URI)
    } catch {
        console.error(new Error('Connection refused!'))
    }
}