import { useState } from 'react'

export default function CompanyRecommendationPage({ onBack }) {
  const [industry, setIndustry] = useState('Technology')
  const [roleType, setRoleType] = useState('Software Engineer')
  const [location, setLocation] = useState('Remote')
  const [notes, setNotes] = useState('')

  return (
    <section className="signin-page company-recommendation-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Company Recommendation</div>
          <h1 className="signin-title">Get company matches tailored to your profile</h1>
          <p className="signin-copy">
            Discover employers aligned with your skills, experience, and career goals so you can focus on the right opportunities.
          </p>

          <form className="signin-form" onSubmit={event => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="industry">Preferred industry</label>
              <select id="industry" value={industry} onChange={e => setIndustry(e.target.value)}>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Consulting</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="role-type">Role type</label>
              <select id="role-type" value={roleType} onChange={e => setRoleType(e.target.value)}>
                <option>Software Engineer</option>
                <option>Data Analyst</option>
                <option>Product Analyst</option>
                <option>AI Researcher</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location preference</label>
              <select id="location" value={location} onChange={e => setLocation(e.target.value)}>
                <option>Remote</option>
                <option>On-site</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="company-notes">Target note</label>
              <textarea
                id="company-notes"
                rows={4}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. growth companies, high salary, training-focused cultures"
              />
            </div>

            <div className="analysis-summary">
              <div>
                <strong>Industry</strong>
                <p>{industry}</p>
              </div>
              <div>
                <strong>Role</strong>
                <p>{roleType}</p>
              </div>
              <div>
                <strong>Location</strong>
                <p>{location}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                Find recommended companies
              </button>
            </div>
          </form>

          <p className="auth-footer">
            Your recommendations will prioritize companies that match your resume and career direction.
          </p>
        </div>
      </div>
    </section>
  )
}
