import { useState } from 'react'

export default function PerformanceDashboardPage({ onBack }) {
  const [range, setRange] = useState('Last 7 days')
  const [metric, setMetric] = useState('Overall progress')
  const [notes, setNotes] = useState('')

  return (
    <section className="signin-page performance-dashboard-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Performance Dashboard</div>
          <h1 className="signin-title">Analyze your prep performance at a glance</h1>
          <p className="signin-copy">
            Track progress, compare metrics, and see where to focus next with actionable dashboard insights.
          </p>

          <form className="signin-form" onSubmit={event => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="range">Time range</label>
              <select id="range" value={range} onChange={e => setRange(e.target.value)}>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="metric">Primary metric</label>
              <select id="metric" value={metric} onChange={e => setMetric(e.target.value)}>
                <option>Overall progress</option>
                <option>Skill mastery</option>
                <option>Test performance</option>
                <option>Interview readiness</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dashboard-notes">What you want to inspect</label>
              <textarea
                id="dashboard-notes"
                rows={4}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. compare performance across modules or identify gaps"
              />
            </div>

            <div className="analysis-summary">
              <div>
                <strong>Time range</strong>
                <p>{range}</p>
              </div>
              <div>
                <strong>Metric</strong>
                <p>{metric}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                View dashboard
              </button>
            </div>
          </form>

          <p className="auth-footer">
            The dashboard will highlight your strengths and the fastest wins for your preparation.
          </p>
        </div>
      </div>
    </section>
  )
}
