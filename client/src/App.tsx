import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import type { HealthResponse } from '@shared/types/api'

function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function run() {
      try {
        const res = await fetch('/api/health', { credentials: 'include' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as HealthResponse
        if (!cancelled) setHealth(data)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Unknown error')
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>AI Study Companion</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>

      <h2>API health check</h2>
      {error && <pre style={{ color: 'crimson' }}>{error}</pre>}
      {health ? <pre>{JSON.stringify(health, null, 2)}</pre> : <p>Loading…</p>}
    </div>
  )
}

function Login() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Login</h1>
      <p>(placeholder)</p>
      <p>
        <Link to="/">Back</Link>
      </p>
    </div>
  )
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

