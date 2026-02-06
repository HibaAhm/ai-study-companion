import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { env } from './config/env'
import { healthHandler } from './routes/health'

export const app = express()

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  }),
)
app.use(cookieParser())
app.use(express.json())

app.get('/api/health', healthHandler)

// Fallback 404 handler (no path argument to avoid path-to-regexp issues)
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

