import { useState } from 'react'

export default function ResumeBasedTestPage({ onBack }) {
  const [targetRole, setTargetRole] = useState('Software Engineer')
  const [reviewType, setReviewType] = useState('Skill matching')
  const [questionCount, setQuestionCount] = useState(10)
  const [notes, setNotes] = useState('')
  const [isReady, setIsReady] = useState(false)

  const handleStart = event => {
    event.preventDefault()
    setIsReady(true)
  }

  return (
    <section className="signin-page resume-based-test-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Resume-Based Test</div>
          <h1 className="signin-title">Build a test from your resume strengths</h1>
          <p className="signin-copy">
            Generate a personalized practice exam based on your resume details, so you can sharpen the exact skills recruiters want.
          </p>

          <form className="signin-form" onSubmit={handleStart}>
            <div className="form-group">
              <label htmlFor="target-role">Target role</label>
              <input
                id="target-role"
                type="text"
                value={targetRole}
                onChange={e => setTargetRole(e.target.value)}
                placeholder="e.g. Product analyst, AI engineer, Developer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="review-type">Focus area</label>
              <select
                id="review-type"
                value={reviewType}
                onChange={e => setReviewType(e.target.value)}
              >
                <option>Skill matching</option>
                <option>Resume formatting</option>
                <option>Core technical depth</option>
                <option>Interview readiness</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="question-count">Number of questions</label>
              <input
                id="question-count"
                type="number"
                min="6"
                max="30"
                step="2"
                value={questionCount}
                onChange={e => setQuestionCount(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Resume highlights</label>
              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. internships, machine learning projects, leadership experience"
              />
            </div>

            <div className="test-analysis-summary analysis-summary">
              <div>
                <strong>Resume target</strong>
                <p>{targetRole}</p>
              </div>
              <div>
                <strong>Focus</strong>
                <p>{reviewType}</p>
              </div>
              <div>
                <strong>Test length</strong>
                <p>{questionCount} questions</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                {isReady ? 'Reset test setup' : 'Generate test'}
              </button>
            </div>
          </form>

          <p className="auth-footer">
            Once created, your resume-based test will highlight gaps and provide a clear practice path.
          </p>
        </div>
      </div>
    </section>
  )
}
