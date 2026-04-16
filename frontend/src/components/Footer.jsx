import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-label">Get In Touch</div>
          <h2>Ready to start your<br />prep journey?</h2>
          <p>
            Prepzify is being actively developed. Drop your email to stay in the loop and be among the first to access the platform.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              {submitted ? 'Notified! ✓' : 'Notify Me'}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">Prepzify</div>
        <div className="footer-text">
          © 2025 Prepzify. AI-Based Placement Preparation Platform.
        </div>
        <div className="footer-text">
          Built in 14 days · Team of 10
        </div>
      </footer>
    </>
  )
}
