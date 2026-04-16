import { useState, useEffect, useRef } from 'react'

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) setStarted(true)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const inc = target / steps
    let curr = 0
    const timer = setInterval(() => {
      curr += inc
      if (curr >= target) {
        setCount(target)
        clearInterval(timer)
      } else setCount(Math.floor(curr))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return [count, ref]
}

function StatCard({ label, value }) {
  const [count, ref] = useCounter(value)
  return (
    <div ref={ref} className="stat-card">
      <div className="stat-value">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const STATS = [
  { label: 'MVP Features', value: 10 },
  { label: 'Team Members', value: 10 },
  { label: 'Days to Launch', value: 14 },
  { label: 'AI Modules', value: 5 },
]

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-badge">
          <span>⚡</span> AI-Powered Placement Preparation
        </div>

        <h1 className="hero-title">
          Prepare Smarter.<br />Land Faster.
        </h1>

        <p className="hero-subtitle">
          Prepzify combines resume intelligence, adaptive testing, interview simulation, and AI study planning into one seamless platform — built for students, designed for success.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started Free</button>
          <button className="btn btn-secondary">View Demo →</button>
        </div>

        <div className="scroll-indicator">
          <span>scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {STATS.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      <section className="problem-section">
        <div className="problem-container">
          <div className="problem-text">
            <div className="section-label">The Problem</div>
            <h2>Placement prep is broken.</h2>
            <p>
              Students spend months preparing without structure — scattered resources, no feedback, and no idea if they're ready. The result? Missed opportunities and wasted potential.
            </p>
          </div>
          <div className="problem-list">
            {[
              '❌ No structured resume feedback',
              '❌ Lack of personalised study plans',
              '❌ No realistic interview practice',
              '❌ No guidance on suitable job roles',
            ].map(item => (
              <div key={item} className="problem-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
