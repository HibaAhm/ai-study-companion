import mongoose from 'mongoose'
import { env } from './env'

export async function connectDb(): Promise<void> {
  if (!env.mongoDbUri) {
    console.warn('[db] MONGODB_URI not set; skipping MongoDB connection')
    return
  }

  try {
    const conn = await mongoose.connect(env.mongoDbUri)
    console.log(`[db] connected: ${conn.connection.host}`)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`[db] connection error: ${message}`)
    process.exit(1)
  }
}

