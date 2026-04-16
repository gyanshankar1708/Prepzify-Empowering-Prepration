import { useState } from 'react'

export default function InterviewSimulationPage({ onBack }) {
  const [scenario, setScenario] = useState('Technical interview')
  const [duration, setDuration] = useState('30 minutes')
  const [comfortNotes, setComfortNotes] = useState('')
  const [prepared, setPrepared] = useState(false)

  const handleStart = event => {
    event.preventDefault()
    setPrepared(true)
  }

  return (
    <section className="signin-page interview-simulation-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Interview Simulation</div>
          <h1 className="signin-title">Practice realistic interview scenarios</h1>
          <p className="signin-copy">
            Get instant feedback from a simulated interviewer, improve your answers, and build confidence before your real interview.
          </p>

          <form className="signin-form" onSubmit={handleStart}>
            <div className="form-group">
              <label htmlFor="scenario">Simulation scenario</label>
              <select id="scenario" value={scenario} onChange={e => setScenario(e.target.value)}>
                <option>Technical interview</option>
                <option>Behavioral interview</option>
                <option>System design interview</option>
                <option>HR / culture fit interview</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Session duration</label>
              <select id="duration" value={duration} onChange={e => setDuration(e.target.value)}>
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>45 minutes</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comfort-notes">What you want to improve</label>
              <textarea
                id="comfort-notes"
                rows={4}
                value={comfortNotes}
                onChange={e => setComfortNotes(e.target.value)}
                placeholder="e.g. speaking clearly, structuring answers, handling follow-ups"
              />
            </div>

            <div className="analysis-summary">
              <div>
                <strong>Simulation ready</strong>
                <p>{prepared ? 'Ready for your next mock interview' : 'Review settings before starting'}</p>
              </div>
              <div>
                <strong>Scenario</strong>
                <p>{scenario}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                {prepared ? 'Restart simulation setup' : 'Start simulation'}
              </button>
            </div>
          </form>

          <p className="auth-footer">
            When you start, the system will guide you through timed feedback and answer refinement.
          </p>
        </div>
      </div>
    </section>
  )
}
