import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import Footer from '../components/Footer.jsx'

export default function Login() {
  const [mode, setMode]           = useState('login') // 'login' | 'signup'
  const [email, setEmail]         = useState('')
  const [name, setName]           = useState('')
  const [password, setPassword]   = useState('')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)
  const { login, signup } = useAuth()
  const navigate                  = useNavigate()

  React.useEffect(() => {
    document.title = 'Login | INFINITY'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    let result
    if (mode === 'login') {
      result = await login(email, password)
    } else if (mode === 'signup') {
      if (!name.trim()) { setError('Please enter your name'); setLoading(false); return }
      result = await signup(email, name, password)
    }

    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.error)
      setPassword('') // Clear only password on failure
    }
    setLoading(false)
  }




  return (
    <div
      className="bg-mesh bg-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="btn-ghost anim-fade"
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          zIndex: 100,
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '10px 20px',
          borderRadius: '12px',
          color: 'var(--text-secondary)',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'translateX(-4px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        ← Back to Home
      </button>

      {/* Floating orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(139,92,246,0.12)', top: '-100px', left: '-100px' }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(6,182,212,0.08)', bottom: '-80px', right: '-80px', animationDelay: '3s' }} />
      <div className="orb" style={{ width: 250, height: 250, background: 'rgba(236,72,153,0.06)', top: '60%', left: '30%', animationDelay: '5s' }} />

      <div style={{ width: '100%', maxWidth: '460px', position: 'relative', zIndex: 1 }} className="anim-scale">
        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="anim-fade">
          <div
            style={{
              width: '72px',
              height: '72px',
              background: 'var(--grad-primary)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '34px',
              margin: '0 auto 20px',
              boxShadow: '0 8px 32px rgba(124,58,237,0.5)',
            }}
          >
            🤖
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: '900',
              marginBottom: '8px',
              lineHeight: 1,
            }}
            className="gradient-text"
          >
            INFINITY
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500' }}>
            {mode === 'login' ? 'Welcome back to INFINITY ✨' : 'Create your INFINITY account 🚀'}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '6px' }}>
            Your personal AI-powered career development platform
          </p>
        </div>

        <div
          className="glass-card anim-slide"
          style={{ 
            padding: window.innerWidth < 480 ? '24px 20px' : '36px', 
            backdropFilter: 'blur(32px)', 
            WebkitBackdropFilter: 'blur(32px)' 
          }}
        >
          {/* Tab switcher */}
          <div
              style={{
                display: 'flex',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 'var(--r-md)',
                padding: '4px',
                marginBottom: '28px',
                border: '1px solid var(--border)',
              }}
            >
              {['login', 'signup'].map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setError('') }}
                  style={{
                    flex: 1,
                    padding: '9px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all var(--mid)',
                    background: mode === m ? 'var(--grad-primary)' : 'transparent',
                    color: mode === m ? '#fff' : 'var(--text-muted)',
                    boxShadow: mode === m ? '0 4px 16px rgba(124,58,237,0.35)' : 'none',
                  }}
                >
                  {m === 'login' ? '🔑 Login' : '✨ Sign Up'}
                </button>
              ))}
            </div>



          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {mode === 'signup' && (
              <div className="anim-fade">
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  FULL NAME
                </label>
                <input
                  id="name-input"
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                EMAIL ADDRESS
              </label>
              <input
                id="email-input"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                PASSWORD
              </label>
              <input
                id="password-input"
                type="password"
                className="input"
                placeholder={mode === 'signup' ? 'Choose a strong password' : 'Enter your password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {error && (
              <div
                className="alert alert-error anim-fade"
                style={{
                  boxShadow: '0 8px 16px rgba(239,68,68,0.2)',
                  animation: 'fadeIn 0.3s ease-out, shake 0.4s ease-in-out',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>⚠️</span> 
                <div style={{ fontWeight: '600' }}>{error}</div>
              </div>
            )}

            <button
              id="submit-btn"
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', padding: '13px', fontSize: '0.95rem', marginTop: '8px' }}
            >
              {loading ? (
                <>
                  <span className="spinner spinner-sm" />
                  {mode === 'login' ? 'Signing in…' : 'Setting up INFINITY…'}
                </>
              ) : (
                mode === 'login' ? '🚀 Sign In' : '✨ Create INFINITY Account'
              )}
            </button>
          </form>


        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
