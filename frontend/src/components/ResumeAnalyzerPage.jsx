import { useState } from 'react'

export default function ResumeAnalyzerPage({ onBack }) {
  const [fileName, setFileName] = useState('')
  const [targetRole, setTargetRole] = useState('')
  const [highlights, setHighlights] = useState('')
  const [isUploaded, setIsUploaded] = useState(false)

  const handleFileChange = event => {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setIsUploaded(true)
  }

  return (
    <section className="signin-page resume-analyzer-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Resume Analyzer</div>
          <h1 className="signin-title">Upload your resume for instant analysis</h1>
          <p className="signin-copy">
            Submit your resume and get AI feedback on skills, formatting, and recruiter fit in one clean report.
          </p>

          <form className="signin-form" onSubmit={event => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="resume-file">Resume file</label>
              <input
                id="resume-file"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="target-role">Target role</label>
              <input
                id="target-role"
                type="text"
                value={targetRole}
                onChange={e => setTargetRole(e.target.value)}
                placeholder="AI intern, Product analyst, Software engineer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="highlights">Top highlights</label>
              <textarea
                id="highlights"
                rows={4}
                value={highlights}
                onChange={e => setHighlights(e.target.value)}
                placeholder="e.g. leadership, ML projects, internship experience"
              />
            </div>

            <div className="form-group resume-status-group">
              <div>
                <strong>File name</strong>
                <p>{fileName || 'No file selected'}</p>
              </div>
              <div>
                <strong>Status</strong>
                <p>{isUploaded ? 'Ready to analyze' : 'Awaiting upload'}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary" disabled={!isUploaded}>
                Analyze resume
              </button>
            </div>
          </form>

          <p className="auth-footer">
            Want to return to the main site? Tap back and continue exploring the modules.
          </p>
        </div>
      </div>
    </section>
  )
}
