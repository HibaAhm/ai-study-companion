import type { Request, Response } from 'express'
import type { HealthResponse } from '../../../shared/types/api'

export function healthHandler(_req: Request, res: Response<HealthResponse>) {
  res.json({
    status: 'OK',
    message: 'AI Study Companion API is running',
    timestamp: new Date().toISOString(),
  })
}

