// app/loading.tsx
export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(255, 255, 255, 0.1)',
        borderTop: '3px solid #00f0ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  )
}