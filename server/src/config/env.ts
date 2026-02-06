import 'dotenv/config'

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 5000),
  mongoDbUri: process.env.MONGODB_URI ?? '',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
}

