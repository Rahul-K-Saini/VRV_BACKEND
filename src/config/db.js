import pg from 'pg'
const { Client } = pg
import dotenv from 'dotenv';
dotenv.config()

export const client = new Client(process.env.DB_URI)

export const connectToDB = async () => {
    try {
        const res = await client.connect()
        return { success: true, message: "DATABASE CONNTECTED SUCCESSFULLY" }
    }
    catch (e) {
        return { success: false, message: e.message }
    }
}