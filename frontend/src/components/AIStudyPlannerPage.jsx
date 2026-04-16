import { useState } from 'react'

export default function AIStudyPlannerPage({ onBack }) {
  const [goal, setGoal] = useState('Interview preparation')
  const [duration, setDuration] = useState('4 weeks')
  const [focusArea, setFocusArea] = useState('Balanced practice')
  const [notes, setNotes] = useState('')

  return (
    <section className="signin-page ai-study-planner-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">AI Study Planner</div>
          <h1 className="signin-title">Create a study plan tailored to your goals</h1>
          <p className="signin-copy">
            Get a personalized preparation roadmap that fits your resume, test performance, and target role.
          </p>

          <form className="signin-form" onSubmit={event => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="study-goal">Study goal</label>
              <select id="study-goal" value={goal} onChange={e => setGoal(e.target.value)}>
                <option>Interview preparation</option>
                <option>Skill improvement</option>
                <option>Job readiness</option>
                <option>Portfolio refinement</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="plan-duration">Plan duration</label>
              <select id="plan-duration" value={duration} onChange={e => setDuration(e.target.value)}>
                <option>2 weeks</option>
                <option>4 weeks</option>
                <option>6 weeks</option>
                <option>8 weeks</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="focus-area">Focus area</label>
              <select id="focus-area" value={focusArea} onChange={e => setFocusArea(e.target.value)}>
                <option>Balanced practice</option>
                <option>Speed & accuracy</option>
                <option>Concept mastery</option>
                <option>Resume-aligned tasks</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="study-notes">Notes for the planner</label>
              <textarea
                id="study-notes"
                rows={4}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. focus on algorithms, system design, or communication practice"
              />
            </div>

            <div className="study-planner-summary analysis-summary">
              <div>
                <strong>Goal</strong>
                <p>{goal}</p>
              </div>
              <div>
                <strong>Duration</strong>
                <p>{duration}</p>
              </div>
              <div>
                <strong>Focus</strong>
                <p>{focusArea}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="button" className="button primary">
                Generate study plan
              </button>
            </div>
          </form>

          <p className="auth-footer">
            Your study plan will be generated instantly to help you stay on track and hit your goals.
          </p>
        </div>
      </div>
    </section>
  )
}
