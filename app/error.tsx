// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '2rem',
      background: '#000',
      color: '#fff',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>
        Something went wrong!
      </h1>
      <p style={{ color: '#888' }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        style={{
          background: '#00f0ff',
          color: '#000',
          padding: '1rem 2rem',
          borderRadius: '12px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  )
}