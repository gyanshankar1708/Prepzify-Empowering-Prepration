import { useState } from 'react'

export default function ChatbotAssistancePage({ onBack }) {
  const [topic, setTopic] = useState('Interview prep')
  const [tone, setTone] = useState('Professional')
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')

  const handleAsk = event => {
    event.preventDefault()
    setResponse(
      `AI Assistant response for “${question || topic}” in a ${tone.toLowerCase()} tone.`
    )
  }

  return (
    <section className="signin-page chatbot-assistance-page">
      <div className="signin-panel">
        <div className="signin-card">
          <div className="signin-badge">Chatbot Assistance</div>
          <h1 className="signin-title">Ask the AI chatbot anything about preparation</h1>
          <p className="signin-copy">
            Receive instant answers about resume tips, test strategies, interview prep, and career planning.
          </p>

          <form className="signin-form" onSubmit={handleAsk}>
            <div className="form-group">
              <label htmlFor="chat-topic">Topic</label>
              <select id="chat-topic" value={topic} onChange={e => setTopic(e.target.value)}>
                <option>Interview prep</option>
                <option>Resume review</option>
                <option>Practice tests</option>
                <option>Career guidance</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="chat-tone">Response tone</label>
              <select id="chat-tone" value={tone} onChange={e => setTone(e.target.value)}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Concise</option>
                <option>Detailed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="chat-question">Your question</label>
              <textarea
                id="chat-question"
                rows={4}
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="Ask about interview answers, study plans, or company fit"
              />
            </div>

            <div className="analysis-summary">
              <div>
                <strong>Selected topic</strong>
                <p>{topic}</p>
              </div>
              <div>
                <strong>Response tone</strong>
                <p>{tone}</p>
              </div>
            </div>

            <div className="signin-actions">
              <button type="button" className="button secondary" onClick={onBack}>
                Back to home
              </button>
              <button type="submit" className="button primary">
                Ask chatbot
              </button>
            </div>
          </form>

          {response && (
            <div className="analysis-summary" style={{ marginTop: '14px' }}>
              <div>
                <strong>Chatbot answer</strong>
                <p>{response}</p>
              </div>
            </div>
          )}

          <p className="auth-footer">
            Use the AI chatbot to get fast direction on the next step in your prep journey.
          </p>
        </div>
      </div>
    </section>
  )
}
