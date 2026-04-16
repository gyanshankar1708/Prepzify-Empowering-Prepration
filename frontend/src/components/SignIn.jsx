import { useState } from 'react'

export default function SignIn({ onBack }) {
  const [mode, setMode] = useState('signin')
  const isSignup = mode === 'signup'
  const isForgot = mode === 'forgot'

  return (
    <section className="signin-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">
            {isSignup ? 'Create your account' : isForgot ? 'Forgot password' : 'Welcome back'}
          </div>
          <h1 className="signin-title">
            {isSignup
              ? 'Start your Prepzify journey'
              : isForgot
              ? 'Reset your password'
              : 'Sign in to Prepzify'}
          </h1>
          <p className="signin-copy">
            {isSignup
              ? 'Secure your prep progress with a free account and get instant access to your study dashboard.'
              : isForgot
              ? 'Enter the email address associated with your account and we’ll send you a reset link.'
              : 'Enter your details to continue to your study dashboard and keep your prep workflow moving.'}
          </p>

          <form className="signin-form" onSubmit={(event) => event.preventDefault()}>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" placeholder="Jane Doe" required />
              </div>
            )}
            {!isForgot && (
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="you@example.com" required />
              </div>
            )}
            {isForgot && (
              <div className="form-group">
                <label htmlFor="reset-email">Email address</label>
                <input id="reset-email" type="email" placeholder="you@example.com" required />
              </div>
            )}
            {!isForgot && (
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Enter your password" required />
              </div>
            )}

            {isSignup && (
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm password</label>
                <input id="confirm-password" type="password" placeholder="Repeat your password" required />
              </div>
            )}

            {!isForgot && (
              <div className="form-link-row">
                {!isSignup ? (
                  <>
                    <label className="form-checkbox">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <button type="button" className="form-link button-link" onClick={() => setMode('forgot')}>
                      Forgot password?
                    </button>
                  </>
                ) : (
                  <p className="signup-note">
                    By creating an account, you agree to our <span className="auth-highlight">Terms of Service</span>.
                  </p>
                )}
              </div>
            )}

            {isForgot && (
              <div className="form-link-row">
                <p className="signup-note">
                  Remembered your password? <button className="form-link button-link" type="button" onClick={() => setMode('signin')}>Sign in</button>
                </p>
              </div>
            )}

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                {isSignup ? 'Create account' : isForgot ? 'Send reset link' : 'Continue'}
              </button>
            </div>
          </form>

          <p className="auth-footer">
            {isSignup ? (
              <>Already have an account? <button className="form-link button-link" type="button" onClick={() => setMode('signin')}>Sign in</button></>
            ) : isForgot ? (
              <>Need more help? Contact support at <span className="auth-highlight">help@prepzify.com</span>.</>
            ) : (
              <>Don’t have an account? <button className="form-link button-link" type="button" onClick={() => setMode('signup')}>Create one</button></>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
