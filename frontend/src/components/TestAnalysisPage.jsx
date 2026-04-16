import { useState } from 'react'

export default function TestAnalysisPage({ onBack }) {
  const [selectedTrack, setSelectedTrack] = useState('Code Reasoning')
  const [questionCount, setQuestionCount] = useState(12)
  const [notes, setNotes] = useState('')
  const [isReady, setIsReady] = useState(false)

  const handleStart = event => {
    event.preventDefault()
    setIsReady(true)
  }

  return (
    <section className="signin-page test-analysis-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Test Analysis System</div>
          <h1 className="signin-title">Launch your mock test and review performance</h1>
          <p className="signin-copy">
            Select a domain, choose the test length, and get an instant breakdown of your strengths and improvement areas.
          </p>

          <form className="signin-form" onSubmit={handleStart}>
            <div className="form-group">
              <label htmlFor="track">Test domain</label>
              <select
                id="track"
                value={selectedTrack}
                onChange={e => setSelectedTrack(e.target.value)}
              >
                <option>Code Reasoning</option>
                <option>Data Structures</option>
                <option>System Design</option>
                <option>Analytics & Aptitude</option>
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
              <label htmlFor="test-notes">Preparation focus</label>
              <textarea
                id="test-notes"
                rows={4}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. improve speed, accuracy, or conceptual clarity"
              />
            </div>

            <div className="test-analysis-summary analysis-summary">
              <div>
                <strong>Selected track</strong>
                <p>{selectedTrack}</p>
              </div>
              <div>
                <strong>Test length</strong>
                <p>{questionCount} questions</p>
              </div>
              <div>
                <strong>Expected output</strong>
                <p>{isReady ? 'Ready to start with instant analytics' : 'Review settings and launch the test'}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                {isReady ? 'Restart test setup' : 'Start mock test'}
              </button>
            </div>
          </form>

          <p className="auth-footer">
            When you start, the system will guide you through timed practice and skill analysis.
          </p>
        </div>
      </div>
    </section>
  )
}
