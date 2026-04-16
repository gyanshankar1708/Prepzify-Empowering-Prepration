import { useState, useEffect } from 'react'

export default function NavBar({ onSignInClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navItems = [
    { title: 'Features', href: '#features' },
    { title: 'Dashboard', href: '#dashboard' },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">Prepzify</div>
      <div className="navbar-links">
        {navItems.map(item => (
          <a
            key={item.title}
            href={item.href || '#'}
            className="nav-link"
            onClick={event => {
              if (item.onClick) {
                event.preventDefault()
                item.onClick()
              }
            }}
          >
            {item.title}
          </a>
        ))}
      </div>
      <button className="navbar-cta" onClick={onSignInClick}>
        Sign In
      </button>
    </nav>
  )
}
